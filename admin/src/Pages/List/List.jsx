import axios from 'axios'
import { backedURI } from '../../App'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styles from './List.module.css'

const List = ({ token }) => {

    const [list, setList] = useState([])
    const currency = '₹'

    const fetchProductData = async () => {
        try {
            const response = await axios.get(backedURI + 'api/product/list', { headers: { token } })
            console.log(token)
            if (response.data.success) {
                setList(response.data.products)

            }
            else {
                toast.error(response.data.message)
            }
        } catch (err) {
            console.log(err)
            toast(err.message)
        }
    }
    useEffect(() => {
        fetchProductData();
    }, [])
    const handleClick = async (_id) => {
        try {

            const response = await axios.post(backedURI + 'api/product/remove', { _id }, { headers: { token } })
            if (response.data.success) {
                toast.success(response.data.message)
                await fetchProductData(0)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)

        }
    }

    return (
        <div>
            <div className={styles.listPage}>
                <div className={styles.all_product_title}>
                    <h2>All Products List</h2>
                </div>
                <div className={styles.table_heade}>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                <div className={styles.products}>
                    {
                        list.map((item, index) => (
                            <div key={index} className={styles.product}>
                                {/* <div className={styles.product_container}> */}
                                <div>
                                    <img className={styles['product_img']} src={item.image[0]} alt="" />
                                </div>
                                <div className={styles.name}>
                                    {item.name}
                                </div>
                                {/* </div> */}
                                {/* <div className={styles.des_container}> */}
                                <div className={styles.category}>
                                    {item.Category}
                                </div>
                                <div className={styles.price}>
                                    {currency}{item.price}
                                </div>
                                <div className={styles.actions}>
                                    <p className={styles.action} onClick={() => handleClick(item._id)}>X</p>
                                </div>
                            </div>
                            // </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default List
