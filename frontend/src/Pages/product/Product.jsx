import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../../Contaxt/ShopContext";
import styles from './SingleProduct.module.css'
import { assets } from "../../assets/assets";
import RelatedProduct from "../../Components/releted/RelatedProduct";

function Product() {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext)
    const [singleProduct, setSingleProduct] = useState()
    const [image, setImage] = useState('')
    const [size, setSize] = useState('')

    const singleProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setSingleProduct(item)
                setImage(item.image[0])
            }
        })
    }

    useEffect(() => {
        singleProductData()
    }, [products, productId])

    return singleProduct ? (
        <div className={styles.product_page}>
            <div className={styles.product}>
                <div className={styles.images}>

                    <div className={styles.main_img}>
                        <img className={styles.main_product} src={image} alt="" />

                        {/* Dots */}
                        <div className={styles.dots}>
                            {singleProduct.image.map((item, index) => (
                                <span
                                    key={index}
                                    onClick={() => setImage(item)}
                                    className={`${styles.dot} ${image === item ? styles.activeDot : ""
                                        }`}
                                ></span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.all_img}>
                        {singleProduct.image.map((item, index) => (
                            <img
                                key={index}
                                onClick={() => setImage(item)}
                                className={styles.product_img}
                                src={item}
                                alt=""
                            />
                        ))}
                    </div>

                </div>
                <div className={styles.product_info}>
                    <div className={styles.single_product_heading}>
                        <h2>{singleProduct.name}</h2>
                    </div>
                    <div className={styles.rating}>
                        <div className={styles.rating_star}>
                            <img src={assets.star_icon} alt="" />
                            <img src={assets.star_icon} alt="" />
                            <img src={assets.star_icon} alt="" />
                            <img src={assets.star_icon} alt="" />
                            <img src={assets.star_dull_icon} alt="" />
                        </div>
                        <p>(122)</p>
                    </div>
                    <div className={styles.price}>
                        <p>{currency}{singleProduct.price}</p>
                    </div>
                    <div className={styles.description}>
                        <p>{singleProduct.description}</p>
                    </div>
                    <div className={styles.select_size}>
                        <h4>Select Size</h4>
                        <div className={styles.size}>
                            {
                                singleProduct.sizes.map((item, index) => (
                                    <button onClick={() => setSize(item)} className={`${item === size ? styles.btn_border : ''}`} key={index} >{item} </button>
                                ))}
                        </div>
                    </div>
                    <div className={styles.addtocart}>
                        <button onClick={() => addToCart(singleProduct._id, size)} className={styles.addtocartBtn}>ADD TO CART</button>
                    </div>
                    <hr />
                    <div className={styles.pro_contant}>
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchage policy within 7 days.</p>
                    </div>
                </div>
            </div>
            <div className={styles.subscription}>
                <button>Description</button>
                <button>Reviews(122)</button>
                <div className={styles.descriptions}>
                    <p>An e-commerce website is an online platform that facilitates the buying and selling of products of products or services over the internet.it serves as a virtul marketplace where businesses and individuals can showcase their product,interact with cusromer,and conduct transaction without the need for a physical presence.E-commerce websites have gained immense popularity due to their conveniece. accessibility,and the global reach they offer.</p>
                    <br />
                    <p>E-commerce website typically products or services along with detailed description,images,prices,and any available variations(e.g,size,colors).Each product usually has its own dedicated page with relevant information.</p>
                </div>
            </div>
            <div className={styles.relatedProduct}>
                <div className={styles.all_products}>
                    <RelatedProduct category={singleProduct.categoty} subCategory={singleProduct.subCategory} />
                </div>
            </div>
        </div>
    ) : <div style={{ opacity: 0 }} />
}

export default Product
