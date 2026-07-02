import { useContext, useState } from 'react'
import Title from '../../Components/Title/Title'
import { ShopContext } from '../../Contaxt/ShopContext'
import styles from './order.module.css'
import axios, { all } from 'axios'
import { useEffect } from 'react'
const Orders = () => {
    const { backendURL, token, currency } = useContext(ShopContext)
    // console.log(products)
    const [order, setOrder] = useState([])
    const getOrderData = async () => {
        try {
            const response = await axios.post(backendURL + 'api/order/user-order', {}, { headers: { token } });
            if (response.data.success) {
                let allOrderItem = []
                response.data.orders.map((product) => {
                    product.items.map((item) => {
                        item['status'] = product.status
                        item['paymentMethod'] = product.paymentMethod
                        item['pyment'] = product.pyment
                        item['date'] = product.date
                        allOrderItem.push(item)
                    })
                })
                setOrder(allOrderItem.reverse())
            }
        } catch (error) { console.log(error) }
    }
    useEffect(() => {
        getOrderData()
    }, [token])
    return (
        <div>
            <div className={styles.order_page}>
                <pre><Title text1={'MY '} text2={'ORDERS'}></Title></pre>
                <div className={styles.order_products}>
                    {
                        order.map((item, index) => {
                            return (
                                <div key={index} className={styles.order_product}>
                                    <div className={styles.orders_info}>
                                        <img src={item.image[0]} alt="" />
                                        <div className={styles.order_info}>
                                            <p>{item.name}</p>
                                            <div className={styles.product_order}>
                                                <b><p>{currency}{item.price}</p></b>
                                                <p>Quentity: {item.qty}</p>
                                                <p>Size: {item.size}</p>
                                            </div>
                                            <p>Date: {new Date(item.date).toLocaleDateString()}</p>
                                            <p>Payment: {item.paymentMethod}</p>

                                        </div>
                                    </div>
                                    <div className={styles.status}>
                                        <p className={styles.succsses}></p>
                                        <p className={styles.showStatus}><b>{item.status}</b></p>
                                    </div>
                                    <div className={styles.track_order}>
                                        <button onClick={() => getOrderData()}>Track Order</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Orders
