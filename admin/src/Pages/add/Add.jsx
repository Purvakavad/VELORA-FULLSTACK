import { useState } from "react"
import { assets } from "../../assets/assets"
import styles from "./Add.module.css"
import axios from 'axios'
import { backedURI } from '../../App'
import { toast } from "react-toastify"

const add = ({ token }) => {
    const [image1, setImage1] = useState(false)
    const [image2, setImage2] = useState(false)
    const [image3, setImage3] = useState(false)
    const [image4, setImage4] = useState(false)

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [Category, setCategory] = useState("Men")
    const [subCategory, setSubCategory] = useState("Topware")

    const [price, setPrice] = useState("")
    const [sizes, setSizes] = useState([])
    const [bestseller, setBestseller] = useState()


    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const fromData = new FormData();
            fromData.append("name", name)
            fromData.append("description", description)
            fromData.append("Category", Category)
            fromData.append("subCategory", subCategory)
            fromData.append("price", price)
            fromData.append("bestseller", bestseller)
            console.log(bestseller)
            fromData.append("sizes", JSON.stringify(sizes))
            image1 && fromData.append("image1", image1)
            image2 && fromData.append("image2", image2)
            image3 && fromData.append("image3", image3)
            image4 && fromData.append("image4", image4)

            const response = await axios.post(backedURI + 'api/product/add', fromData, { headers: { token } })
            console.log(response)
            if (response.data.success) {
                console.log("added")
                toast.success(response.data.message)
            }
            else {
                toast.error(response.data.message)
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className={styles.Add_Page}>
            <form onSubmit={handleSubmit}>
                <div className={styles.add}>
                    <h2>Upload Image</h2>

                    <div className={styles.upload_imgs}>
                        <label htmlFor="img-1">
                            <img className={styles.img} src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} />
                            <input type="file" onChange={(e) => setImage1(e.target.files[0])} id="img-1" hidden />

                        </label>
                        <label htmlFor="img-2">
                            <img src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} />
                            <input type="file" onChange={(e) => setImage2(e.target.files[0])} id="img-2" hidden />
                        </label>
                        <label htmlFor="img-3">
                            <img src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} />
                            <input type="file" onChange={(e) => setImage3(e.target.files[0])} id="img-3" hidden />


                        </label>
                        <label htmlFor="img-4">
                            <img src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} />
                            <input type="file" onChange={(e) => setImage4(e.target.files[0])} id="img-4" hidden />

                        </label>
                    </div>
                    <div className={styles.product_name}>
                        <p>Product name</p>
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Type here" required />
                    </div>
                    <div className={styles.product_des}>
                        <p>Product description</p>
                        <textarea onChange={(e) => setDescription(e.target.value)} value={description} name="" id="" placeholder="Write content here"></textarea>
                    </div>
                    <div className={styles.product_info}>
                        <div className={styles.product_category}>
                            <p>Product category</p>
                            <select onChange={(e) => setCategory(e.target.value)} value={Category} className={styles.category_select}>
                                <option value="Women">Womem</option>
                                <option value="Men">Men</option>
                                <option value="Kids">Kids</option>
                            </select>
                        </div>
                        <div className={styles.sub_category}>
                            <p>Sub category</p>
                            <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className={styles.sub_category_select}>
                                <option value="Topware">Topware</option>
                                <option value="Bottomware">Bottomware</option>
                                <option value="Winterware">Winterware</option>
                            </select>
                        </div>
                        <div className={styles.price}>
                            <p>Product Price</p>
                            <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" className={styles.price_input} />
                        </div>
                    </div>
                    <div className={styles.product_size}>
                        <p>Product Sizes</p>
                        <div className={styles.sizes}>
                            <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])} className={`${styles.size} ${sizes.includes("S") ? styles.back_clr : ''}`}>
                                S
                            </div>
                            <div className={`${styles.size} ${sizes.includes("M") ? styles.back_clr : ''}`} onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])}>M</div>
                            <div className={`${styles.size} ${sizes.includes("L") ? styles.back_clr : ''}`} onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])}>L</div>
                            <div className={`${styles.size} ${sizes.includes("XL") ? styles.back_clr : ''}`} onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, "XL"])}>XL</div>
                            <div className={`${styles.size} ${sizes.includes("XXL") ? styles.back_clr : ''}`} onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, "XXL"])}>XXL</div>

                        </div>
                    </div>
                    <div className={styles.bestseller}>
                        <input type="checkbox" onChange={() => setBestseller(prev => !prev)} checked={bestseller} className={styles.seller} />Add to bestseller
                    </div>
                    <div className={styles.add_product}>
                        <button>ADD</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default add
