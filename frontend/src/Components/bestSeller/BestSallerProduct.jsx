import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../../Contaxt/ShopContext"
import Title from '../Title/Title'
import ProductItem from "../products/ProductItem";
import styles from './bestSeller.module.css'

const BestSallerProduct = () => {
    const { products } = useContext(ShopContext);
    const [bestSaller, setBestSaller] = useState([]);

    useEffect(() => {
        const saller = products.filter((item) => item.bestseller)
        setBestSaller(saller.slice(0, 5))
    }, [products])
    // console.log(bestSaller)
    return (
        <div className={styles.bestSection}>
            <pre><Title text1={'BEST '} text2={'SELLERS'} /></pre>
            <p className={styles.latest_text}>Discover our most loved fashion pieces, carefully selected for their style, quality, and timeless appeal.</p>
            <div className={styles.all_product}>
                {
                    bestSaller.map((item, index) => (
                        <ProductItem key={index} id={item._id} img={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSallerProduct
