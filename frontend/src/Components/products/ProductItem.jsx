import { useContext } from "react"
import { ShopContext } from "../../Contaxt/ShopContext"
import { Link } from "react-router-dom"
import '../../Pages/home/Home'
import styles from './products.module.css'

const ProductItem = ({ id, img, name, price }) => {
    // console.log(id, name, img, price)
    const { currency } = useContext(ShopContext)
    return (
        <div className={styles.product_card}>
            <Link to={`/product/${id}`} className={styles.product_link}>
                <div className={styles.product_img}>
                    <img className={styles.img} src={img[0]} alt="" />
                </div>
                <div className={styles.product_name}>
                    <p>{name}</p>
                </div>

                <div className={styles.product_price}>
                    <p>{currency}{price}</p>
                </div>

            </Link>
        </div>
    )
}

export default ProductItem
