import { assets } from "../../assets/assets"
import Title from '../Title/Title'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faShieldHalved, faHeadset, faTruck } from "@fortawesome/free-solid-svg-icons";
import styles from './policy.module.css'
const OurPolicy = () => {
    return (
        <div className={styles.policy_section}>
            <pre><Title className={styles.title} text1={"WHY CHOOSE "} text2={"VELORA? "}></Title></pre>
            <p className={styles.why}>Shop with confidence - premium quality,secure payments,fast delivery,and hassle-free returns.</p>
            <div className={styles.policy_carts}>
                <div className={styles.policy_cart}>
                    <FontAwesomeIcon icon={faRotate} className={styles.features_icon} />
                    <h3>Easy Exchange</h3>
                    <p>Hassle-free exchcnges within 7 days.</p>
                </div>
                <div className={styles.policy_cart}>
                    <FontAwesomeIcon icon={faHeadset} className={styles.features_icon} />
                    <h3>24/7 Support</h3>
                    <p>Our team is here to help anytime.</p>
                </div>
                <div className={styles.policy_cart}>
                    <FontAwesomeIcon icon={faShieldHalved} className={styles.features_icon} />
                    <h3>Secure Payment</h3>
                    <p>100% Safe & Encrypted Checkout</p>
                </div >
                <div className={styles.policy_cart}>
                    <FontAwesomeIcon icon={faTruck} className={styles.features_icon} />
                    <h3>Fast Delivery</h3>
                    <p>Fast and reliable delivery across india.</p>
                </div>
            </div >
        </div >
    )
}

export default OurPolicy
