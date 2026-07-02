import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../../Contaxt/ShopContext"
import { assets } from "../../assets/assets"
import styles from './Searchbar.module.css'
import { useLocation } from "react-router-dom"

const Search = () => {
    const { showSearch, setShowSearch, search, setSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [location])

    return showSearch && visible ? (
        <div className={styles.search_bar}>
            <div className={styles.search}>
                <input className={styles.search_input} value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Seacrh" />
                <img className={styles.searchbar_icon} src={assets.search_icon} alt="" />
            </div>
            <div className={styles.close - search}>
                <img className={styles.close_icon} onClick={() => setShowSearch(false)} src={assets.cross_icon} alt="" />
            </div>
        </div>
    ) : null
}

export default Search
