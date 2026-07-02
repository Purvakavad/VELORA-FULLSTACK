import { useContext, useState, useEffect } from "react"
import { ShopContext } from "../../Contaxt/ShopContext"
import Title from '../Title/Title'
import ProductItem from "../products/ProductItem";
import styles from './reletedProducts.module.css'

const RelatedProduct = (category, subCategory) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([])

    const relatedProduct = () => {
        if (products.length > 0) {
            const copyProduct = products.slice()
            copyProduct.filter((item) => category == item.category)
            copyProduct.filter((item) => subCategory == item.subCategory)
            setRelated(copyProduct.slice(0, 5))
        }
    }
    useEffect(() => { relatedProduct() }, [products])
    return (
        <div>
            <pre> <Title text1={'RELETED '} text2={'PRODUCTS'} /></pre>
            <div className={styles.all_product}>
                {
                    related.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} img={item.image} price={item.price} />
                    ))
                }
            </div>

        </div>
    )
}

export default RelatedProduct
