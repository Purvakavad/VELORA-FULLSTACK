import styles from './footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope, faPhone, faLocationDot
} from "@fortawesome/free-solid-svg-icons";

import {
    faInstagram, faWhatsapp,
    faFacebook, faXTwitter
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_section}>
                <div className={styles.brand}>
                    <h2 className={styles.brand_name}>Velora</h2>
                    <p>Discover timeless fashion for every occasion. Style, quality, and comfort delivered to your doorstep.</p>
                    <hr className={styles.roller} />
                    <div className={styles.accounts}>
                        <h5>Follow Us</h5>
                        <div className={styles.icons}>
                            <a href="https://www.wa.me/7046737648" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faWhatsapp} className={styles.icon} /></a>
                            <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faFacebook} className={styles.icon} /></a>
                            <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram} className={styles.icon} /></a>
                            <a href="https://www.x.com.com" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faXTwitter} className={styles.icon} /></a>
                        </div>
                    </div>

                </div>
                <div className={styles.quick_links}>
                    <h3 className={styles.links}>Quick Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href="/collection">Collection</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className={styles.customer_care}>
                    <h3 className={styles.customer}>Customer Care</h3>
                    <ul>
                        <li><a href="">Track Orders</a></li>
                        <li><a href="">Shipping Policy</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Condintions</a></li>
                        <li><a href="">Return Policy</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <h3 className={styles.contact_head}>Contact Us</h3>
                    <ul>
                        <li> <FontAwesomeIcon icon={faEnvelope} /> Email: velora@gmail.com</li>
                        <li><FontAwesomeIcon icon={faPhone} /> +91 12122 23234</li>
                        <li> <FontAwesomeIcon icon={faLocationDot} /> Surat ,Gujarat</li>
                    </ul>

                </div>

            </div>
            <div>
                <hr />
                <p className={styles.copyright}>&copy; 2026 Velora. All Rights Reserved. <br /> Desingned by Purva Kavad</p>
            </div>
        </div >
    )
}

export default Footer
