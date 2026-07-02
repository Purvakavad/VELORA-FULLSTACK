import styles from './collection.module.css'
import Title from '../../Components/Title/Title'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../Contaxt/ShopContext'
import ProductItem from '../../Components/products/ProductItem'
import { assets } from '../../assets/assets'
const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [alllProduct, setAllProduct] = useState([]);
    const [filter, setFilter] = useState(false);
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])

    const [sortType, setSortType] = useState('relavent')


    const handleClick = () => {
        setFilter(!filter)
    }
    const categoryToggle = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter((item) => item !== e.target.value))
        }
        else {
            setCategory(prev => [...prev, e.target.value])
        }
    }
    const subCategoryToggle = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter((item) => item !== e.target.value))
        }
        else {
            setSubCategory(prev => [...prev, e.target.value])
        }
    }


    let applyFilter = () => {
        let copyProducts = products.slice()

        if (showSearch && search) {
            copyProducts = copyProducts.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if (category.length > 0) {
            copyProducts = copyProducts.filter((item) => category.includes(item.Category))
        }
        if (subCategory.length > 0) {
            copyProducts = copyProducts.filter((item) => subCategory.includes(item.subCategory))

        }
        setAllProduct(copyProducts)

    }
    const sortFilter = () => {
        const fsCopy = products.slice()
        switch (sortType) {
            case 'high-low':
                setAllProduct(fsCopy.sort((a, b) => b.price - a.price))
                break;
            case 'low-high':
                setAllProduct(fsCopy.sort((a, b) => a.price - b.price))
                break;
            default:
                applyFilter()
                break

        }
    }



    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch, products])

    useEffect(() => {
        sortFilter()
    }, [sortType])
    return (
        <div>
            <div className={` ${styles.collection_page} ${showSearch ? styles.show_search : ''}`}>
                <div className={styles.filter_bar}>
                    <div className={styles.filter_heading} onClick={handleClick}>
                        <h2>FILTERS</h2>
                        <img className={`${styles.back_icon} ${filter ? styles.rotated : ''}`} src={assets.dropdown_icon} alt="" />
                    </div>
                    <div className={filter ? styles.block : styles.hidden} >
                        <div className={styles.sort_by_category} >
                            <h4>CATEGORIES</h4>
                            <input type="checkbox" value="Men" onChange={categoryToggle} /> Men <br />
                            <input type="checkbox" value="Women" onChange={categoryToggle} /> Women
                            <br />
                            <input type="checkbox" value="Kids" onChange={categoryToggle} /> Kids <br />

                        </div>
                        <div className={styles.sort_by_type}>
                            <h4>TYPE</h4>
                            <input type="checkbox" name='subCategory' value="Topware" onChange={subCategoryToggle} /> Topwear <br />
                            <input type="checkbox" name='subCategory' value="Bottomware" onChange={subCategoryToggle} /> Bottomwear <br />
                            <input type="checkbox" name='subCategory' value="Winterware" onChange={subCategoryToggle} /> Winterwear <br />
                        </div>
                    </div>
                </div>
                <div className={styles.products}>
                    <div className={styles.heading}>
                        <div className={styles.div}>
                            <pre>
                                <Title className={styles.title} text1='ALL ' text2='COLLECTIONS' />
                            </pre>
                        </div>
                        <select onChange={(e) => setSortType(e.target.value)} className={styles.sorting}>
                            <option value="relavent">Sort by: Relavent</option>
                            <option value="low-high">Sort by: Low to High</option>
                            <option value="high-low">Sort by: High to Low</option>
                        </select>
                    </div>
                    <div className={styles.all_product}>
                        {
                            alllProduct.map((item, index) => (
                                <ProductItem key={index} id={item._id} img={item.image} name={item.name} price={item.price} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Collection
