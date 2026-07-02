import { useContext } from "react"
import { ShopContext } from "../../Contaxt/ShopContext"
import Title from "../Title/Title";
import styles from './carttotal.module.css'

function CartTotal() {
    const { currency, dilivery_fee, getTotalAmount } = useContext(ShopContext);
    return (
        <div>
            <div className={styles.cart_total}>
                <pre><Title text1={'CART '} text2={'TOTALS'} /></pre>
                <div className={styles.total_info}>
                    <div className={styles.total} className={styles.border}>
                        <p>SubTotal</p>
                        <p>{currency}{getTotalAmount()}.00</p>
                    </div>
                    <div className={styles.total} className={styles.border}>
                        <p>Shipping Fee</p>
                        <p >{currency}{dilivery_fee}.00</p>
                    </div>
                    <div className={styles.total} id="totalAmount">
                        <p><b>Total</b></p>
                        <p><b>{currency}{getTotalAmount() === 0 ? 0 : getTotalAmount() + dilivery_fee}.00</b></p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
