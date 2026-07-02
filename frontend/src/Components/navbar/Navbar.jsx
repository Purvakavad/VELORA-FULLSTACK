import { Link, NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './navbar.module.css'
import {
    faMagnifyingGlass,
    faCartShopping,
    faBars,
    faArrowLeft,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from 'react';
import { ShopContext } from '../../Contaxt/ShopContext';



const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { setShowSearch, getCartCount, token, navigate, setToken, setCartItem } = useContext(ShopContext)

    const handleShowSearch = () => {
        navigate('/collection')
        setShowSearch(true)

    }

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItem({})

    }
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <Link to='/'><h2 className={styles.website_name}>Velora</h2></Link>
                </div>
                <ul className={styles.navLinkes} >
                    <li className={styles.navlink}>
                        <NavLink to='/' className={({ isActive }) => isActive ? styles.active : ""}>
                            <p>HOME</p>
                        </NavLink>
                    </li >
                    <li className={styles.navlink}>
                        <NavLink to='/collection' className={({ isActive }) => isActive ? styles.active : ""}>
                            <p>COLLECTION</p>
                        </NavLink>
                    </li>
                    <li className={styles.navlink} >
                        <NavLink to='/about' className={({ isActive }) => isActive ? styles.active : ""}>
                            <p>ABOUT</p>
                        </NavLink>
                    </li>
                    <li className={styles.navlink}>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? styles.active : ""}>
                            <p>CONTACT</p>
                        </NavLink>
                    </li>
                    <li className={styles.navlink}>
                        <button className={styles.admin_panel} onClick={() => window.location.href = "http://localhost:5174"}>Admin Panel</button>
                    </li>
                </ul>
                <div className={styles.action}>
                    <div className={styles.search_icon} onClick={handleShowSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>

                    <div className={styles.profile_icon}>
                        <div className='icon_hover'>
                            <FontAwesomeIcon onClick={() => token ? null : navigate('/login')} icon={faUser} />
                        </div>
                        {
                            token &&
                            <div>
                                <div className={styles.profile_options}>
                                    <p onClick={() => navigate('/orders')}>Orders</p>
                                    <p onClick={logout}>Logout</p>
                                </div>
                            </div>

                        }
                    </div>
                    <Link to='/cart' className={styles.cart_icon}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <div className={styles.cart_count}>{getCartCount()}</div>
                    </Link>
                </div>
                <div className={styles.humburger}>
                    <FontAwesomeIcon icon={faBars} onClick={() => setIsVisible(!isVisible)} />
                </div>
                <div className={`${styles.side_menu} ${isVisible ? styles.active_menu : ''}`}>
                    {/* <div className={styles.sidebar_back} onClick={() => setIsVisible(false)}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <p>Back</p>
                    </div> */}
                    <div className={styles.sidemenu_linkes}>
                        <NavLink onClick={() => setIsVisible(false)} to='/' className={styles.sidemenu_link}>HOME</NavLink>
                        <NavLink onClick={() => setIsVisible(false)} to='/collection' className={styles.sidemenu_link}>COLLECTION</NavLink>
                        <NavLink onClick={() => setIsVisible(false)} to='/about' className={styles.sidemenu_link}>ABOUT</NavLink>
                        <NavLink onClick={() => setIsVisible(false)} to='/contact' className={styles.sidemenu_link}>CONTACT</NavLink>
                        <button className={styles.admin_panel} onClick={() => window.location.href = "http://localhost:5174"}>Admin Panel</button>

                    </div>

                </div>
            </div>
            <hr />

        </div >
    )
}

export default Navbar

