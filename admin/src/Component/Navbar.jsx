import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'
const Navbar = ({ setToken }) => {
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <Link to='/'><h2 className={styles.website_name}>Velora</h2></Link>
                    <p className={styles.admin}>
                        <b>ADMIN PANEL</b>
                    </p>
                </div>
                <div className={styles.logoutBtn}>
                    <button onClick={() => setToken('')}>Logout</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar
