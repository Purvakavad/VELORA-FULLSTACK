import { assets } from '../../assets/assets'
import styles from './sidebar.module.css'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
    return (
        <div>
            <div className={styles.sidebar}>
                <div className={styles.sidebar_container}>
                    <NavLink to="add" className={styles.opretion}>
                        <img src={assets.add_icon} alt="" />
                        <p>Add Items</p>
                    </NavLink>
                    <NavLink to="list" className={styles.opretion}>
                        <img src={assets.order_icon} alt="" />
                        <p>List Items</p>
                    </NavLink>
                    <NavLink to="order" className={styles.opretion}>
                        <img src={assets.order_icon} alt="" />
                        <p>Orders</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SideBar
