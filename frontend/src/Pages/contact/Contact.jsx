import { assets } from '../../assets/assets'
import styles from './contant.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock, } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Contact = () => {
    const handelClick = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <div className={styles.contant_page}>
                <div className={styles.hero_section}>
                    <div className={styles.hero_contaxt}>
                        <div className={styles.contaxt}>
                            <p className={styles.title}>CONTACT US</p>
                            <h3>We'd Love to Hear From You</h3>
                            <p className={styles.con_context}>Have questions about our products, orders, or services?
                                Our team is here to help you with the best shopping experience.
                                Feel free to reach out anytime.</p>
                            <div className={styles.mobileView}>
                                <p>Have questions about our products, orders, or services?
                                    Our team is here to help you with the best shopping experience.</p>
                            </div>
                            <Link to="/collection" className={styles.Btn}>SHOP COLLECTIONS</Link>
                        </div>
                    </div>
                    <img src={assets.contact} alt="" className={styles.img} />
                </div>
                <div className={styles.main_conatiner}>
                    <div className={styles.compny_info}>

                        <div className={styles.contact_cart}>
                            <FontAwesomeIcon icon={faPhoneAlt} className={styles.icons} />
                            <div className={styles.info}>

                                <h3>Phone</h3>
                                <p>+91 12122 23234</p>
                                <p>Mon-Sun(9:00AM - 9:00PM)</p>
                            </div>
                        </div>

                        <div className={styles.contact_cart}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icons} />
                            <div className={styles.info}>

                                <h3>Email</h3>
                                <p> velora@gmail.com</p>
                                <p>We reply within 24 hours</p>
                            </div>
                        </div>
                        <div className={styles.contact_cart}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icons} />
                            <div className={styles.info}>
                                <h3>Address</h3>
                                <p>Velora FAshion Store,<br />Surat ,Gujarat,india - 395010</p>
                            </div>
                        </div>
                        <div className={styles.contact_cart}>
                            <FontAwesomeIcon icon={faClock} className={styles.icons} />
                            <div className={styles.info}>

                                <h3>Working Hours</h3>
                                <p>Monday - Saturday</p>
                                <p>10:00 AM - 7:00PM</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.container} >
                        <div className={styles.contact_info}>
                            <div className={styles.userMsg}>
                                <h2>Get In Touch</h2>
                                <form onSubmit={handelClick}>
                                    <div className={styles.inputGroup}>
                                        <input type="text" placeholder='Your Name' required />
                                        <input type="email" placeholder='Email Address' required />
                                    </div>
                                    <input type="text" placeholder='Subject' required />
                                    <textarea name="" id="" placeholder='Your Message' required></textarea>
                                    <div className={styles.sendBtn}>
                                        <button type='submit' className={styles.Btn} >SEND MESSAGE</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className={styles.compny_map}>
                            <img src={assets.contact_img} alt="" className={styles.compny_img} />
                            <div className={styles.map_container}>

                                <iframe
                                    title="Velora FAshion Store Ring Road Surat"
                                    src="https://maps.google.com/maps?q=Ring%20Road%20Surat&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    className={styles.map}
                                ></iframe>
                            </div>
                        </div>
                    </div>

                </div >
            </div >
        </div>
    )
}

export default Contact

