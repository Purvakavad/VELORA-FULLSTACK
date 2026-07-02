import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../../Contaxt/ShopContext"
import Title from '../../Components/Title/Title'
import styles from './cart.module.css'
import { assets } from "../../assets/assets"
import CartTotal from "../../Components/CartTotal/CartTotal"

const Cart = () => {
    const { products, cartItem, currency, updateQty, navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            let data = []
            for (const items in cartItem) {
                for (const item in cartItem[items]) {
                    if (cartItem[items][item] > 0) {
                        data.push({
                            _id: items,
                            size: item,
                            quantity: cartItem[items][item]
                        })

                    }
                }
            }
            setCartData(data);
        }

    }, [cartItem])

    return (
        <div>
            <div className={styles.cartpage}>
                <pre><Title text1={'YOUR '} text2={'CART'} />
                </pre>
                {
                    cartData.map((items, index) => {
                        let productData = products.find((item) => item._id == items._id)
                        return (

                            <>
                                <div className={styles.cart_info}>
                                    < div key={index} className={styles.product} >
                                        <div className={styles.img}>
                                            <img src={productData.image[0]} className={styles.cart_img} alt="" />
                                        </div>
                                        <div className={styles.information}>
                                            <p className={styles.name} >{productData.name}</p>
                                            <div className={styles.detail}>
                                                <p>{currency}{productData.price}</p>
                                                <button>{items.size}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.update_qty}>
                                        <input className={styles.qty_input} onChange={(e) => e.target.value == '' || e.target.value == '0' ? null : updateQty(productData._id, items.size, Number(e.target.value))} type="number" defaultValue={items.quantity} min="1" />
                                        <img className={styles.del_icon} onClick={() => updateQty(productData._id, items.size, 0)} src={assets.bin_icon} alt="" />
                                    </div >
                                    <div className={styles.delete_qty}>
                                        <img className={styles.delete_icon} onClick={() => updateQty(productData._id, items.size, 0)} src={assets.bin_icon} alt="" />
                                    </div >
                                </div>


                            </>
                        )
                    })
                }
                <CartTotal />
                <div className={styles.checkoutBtn}>
                    < button onClick={() => navigate('/place-order')}> PROCEED TO CHECKOUT</button >
                </div >
            </div >
        </div >


    )
}

export default Cart
