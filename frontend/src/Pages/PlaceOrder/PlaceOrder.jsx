import { useContext, useState } from 'react'
import { assets, products } from '../../assets/assets'
import CartTotal from '../../Components/CartTotal/CartTotal'
import Title from '../../Components/Title/Title'
import styles from './place-order.module.css'
import { ShopContext } from '../../Contaxt/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { backedURI } from '../../../../admin/src/App'
function PlaceOrder() {
    const [method, setMethod] = useState('COD')
    const { navigate, cartItem, products, getTotalAmount, dilivery_fee, backendURL, token, setCartItem } = useContext(ShopContext)

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setFormData(data => ({ ...data, [name]: value }))
    }

    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Order Payment',
            description: 'Order Payment',
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                console.log(response)
                try {
                    console.log("verify")
                    const { data } = await axios.post(backendURL + 'api/order/verifyRazorpay', response, { headers: { token } })
                    console.log(data)
                    if (data.success) {
                        navigate('/orders')
                        setCartItem({});
                    } else {
                        navigate('/cart')
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error)
                }
            }

        }
        const rzp = new window.Razorpay(options)
        rzp.open()
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const orderData = []

            for (const items in cartItem) {
                for (const item in cartItem[items]) {
                    if (cartItem[items][item] > 0) {
                        const orderItem = structuredClone(products.find((product) => product._id === items))
                        if (orderItem) {
                            orderItem.size = item
                            orderItem.qty = cartItem[items][item]
                            orderData.push(orderItem)
                        }
                    }
                }
            }
            const orderItem = {

                items: orderData,
                address: formData,
                amount: getTotalAmount() + dilivery_fee
            }

            switch (method) {
                case 'COD':
                    {
                        let response = await axios.post(backendURL + 'api/order/place-order', orderItem, { headers: { token } })
                        if (response.data.success) {
                            setCartItem({})
                            navigate('/orders')
                        } else {
                            toast.error(response.data.message)
                        }
                        break;
                    }
                case 'Stripe':
                    {
                        try {
                            const responseStripe = await axios.post(backendURL + 'api/order/stripe', orderItem, { headers: { token } })
                            if (responseStripe.data.success) {
                                const { session_url } = responseStripe.data
                                window.location.replace(session_url)
                            } else {
                                toast.error(responseStripe.data.message)
                            }
                        }
                        catch (error) {
                            console.log("Response:", error.response?.data);
                        }
                        break;
                    }

                case 'Razorpay':
                    {
                        const responseRazorpay = await axios.post(backendURL + 'api/order/razorpay', orderItem, { headers: { token } })
                        console.log(responseRazorpay)
                        if (responseRazorpay.data.success) {
                            console.log("success")
                            initPay(responseRazorpay.data.order)
                        }
                        else {
                            console.log(responseRazorpay.data.message)
                        }
                        break;
                    }

                default:
                    break;
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.placeorder_page}>
                <div className={styles.order}>
                    <div className={styles.delivery_info}>
                        <pre><Title className="title" text1={'DELIVERY '} text2={'INFORMATION'}></Title></pre>
                        <div className={styles.inputs} id='input'>
                            <input required name="firstname" value={formData.firstname} onChange={handleChange} type="text" placeholder="First name" />
                            <input required name="lastname" value={formData.lastname} onChange={handleChange} type="text" placeholder="Last name" />
                        </div>
                        <div >
                            <input required name="email" value={formData.email} onChange={handleChange} type="email" className={styles.emails_input} placeholder="Email address" />
                        </div>
                        <div >
                            <input required name="street" value={formData.street} onChange={handleChange} type="text" className={styles.street_input} placeholder="Street" />
                        </div>
                        <div className={styles.inputs}>
                            <input required name="city" value={formData.city} onChange={handleChange} type="text" placeholder="City" />
                            <input required name="state" value={formData.state} onChange={handleChange} type="text" placeholder="State" />
                        </div>
                        <div className={styles.inputs}>
                            <input required name="zipcode" value={formData.zipcode} onChange={handleChange} type="text" placeholder="Zipcode" />
                            <input required name="country" value={formData.country} onChange={handleChange} type="text" placeholder="Country" />
                        </div>
                        <div >
                            <input required name="phone" value={formData.phone} onChange={handleChange} type="number" className={styles.phone_input} placeholder="Phone" />
                        </div>
                    </div>
                    <div className={styles.cart_info}>
                        <CartTotal />
                        <div className={styles.payment}>
                            <pre><Title text1={'PAYMENT '} text2={'METHOD'}></Title></pre>
                            <div className={styles.payment_img}>
                                <button type="button" onClick={() => setMethod('Stripe')} >
                                    <p className={`${method === 'Stripe' ? styles.selectMethod : ''}`}></p>
                                    <img src={assets.stripe_logo} alt="" />
                                </button>
                                <button type="button" onClick={() => setMethod('Razorpay')}>
                                    <p className={`${method === 'Razorpay' ? styles.selectMethod : ''}`}></p>
                                    <img src={assets.razorpay_logo} alt="" />
                                </button>
                                <button type="button" onClick={() => setMethod('COD')} className={styles.delivery}><p className={`${method === 'COD' ? styles.selectMethod : ''}`}></p>CASH ON DELIVERY</button>
                            </div>
                            <div className={styles.order_btn}>
                                <button type="submit" className={styles.final_order}>PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PlaceOrder
