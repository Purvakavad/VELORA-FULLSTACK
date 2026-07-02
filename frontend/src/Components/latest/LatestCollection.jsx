import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../../Contaxt/ShopContext"
import Title from "../Title/Title"
import ProductItem from "../products/ProductItem"
import styles from './latest.module.css'

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProduct, setLatestProduct] = useState([]);

    useEffect(() => {
        setLatestProduct(products.slice(0, 10))
    }, [products])
    return (
        <div className={styles.latestsection}>
            <pre><Title text1={"LATEST "} text2={'COLLECTIONS'} /></pre>
            <p className={styles.latest_text}>Discover the latest arrivals crafted with premium quality, modern elegance, and timeless fashion for every occasion.</p>
            <div className={styles.all_product}>
                {
                    latestProduct.map((item, index) => (
                        <ProductItem key={index} id={item._id} img={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollection
