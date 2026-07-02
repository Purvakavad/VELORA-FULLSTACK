import { assets } from '../../assets/assets'
import OurPolicy from '../../Components/ourpolicy/OurPolicy'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUsers, faStar, faHeadset, faBullseye, faEye } from "@fortawesome/free-solid-svg-icons";
import Title from '../../Components/Title/Title';
import NewsSlleter from '../../Components/news/NewsSlleter'
import styles from './about.module.css'
import CountUpModule from "react-countup";
const CountUp = CountUpModule.default;
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div>
            <div className={styles.aboute_page}>
                <div className={styles.hero_section}>
                    <div className={styles.hero_contant}>
                        <h5>About Velora</h5>
                        <div className={styles.contents} >
                            <p>Elevating Everyday Fashion with Timeless Style</p>
                            <p>Discover carefully curated collections that
                                combine elegance, comfort, and modern trends.</p>
                        </div>
                        <button className={styles.shopBtn}><Link to="/collection">Explore Collection</Link></button>
                    </div>
                </div>
                <div className={styles.main_container}>
                    <div className={styles.story}>
                        <div className={styles.left}>
                            <p className={styles.our_story}>OUR STORY</p>
                            <h3>The Journey of Velora</h3>
                            <div className={styles.contaxt}>
                                <p>Velora was created to bring together timeless elegance and modern fashion. Our goal is to provide premium-quality products that help people express their unique style with confidence. Every collection reflects our commitment to quality, comfort, and customer satisfaction.</p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <img src={assets.about} alt="" className={styles.about_img} />
                        </div>
                    </div>
                    <div>
                        <OurPolicy />
                    </div>

                    <div className={styles.connections}>
                        <div className={styles.products}>
                            <FontAwesomeIcon icon={faBagShopping} className={styles.icons} />
                            <h3> <CountUp end={50} duration={5} />+</h3>
                            <p>Products</p>
                        </div>
                        <div className={styles.client}>
                            <FontAwesomeIcon icon={faUsers} className={styles.icons} />
                            <h3><CountUp end={500} duration={5.5} />+</h3>
                            <p>Happy Customers</p>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faHeadset} className={styles.icons} />
                            <h3>24/7</h3>
                            <p>Customer Support</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faStar} className={styles.icons} />

                            <h3><CountUp end={99} duration={5} />%</h3>
                            <p>Satisfactions</p>
                        </div>
                    </div>
                    <div className={styles.target}>
                        <pre>
                            <Title text1={'OUR MISSION'} text2={' & VISION'}></Title>
                        </pre>
                        <div className={styles.our_section}>
                            <div className={styles.ourmission}>
                                <FontAwesomeIcon icon={faBullseye} className={styles.icons} />
                                <h4>Our Mission</h4>
                                <p className={styles.content}>To make premium fashion accessible to everyone by delivering quality, style, and comfort with every purchase.</p>
                            </div>
                            <div className={styles.ourvision}>
                                <FontAwesomeIcon icon={faEye} className={styles.icons} />
                                <h4>Our Vision</h4>
                                <p className={styles.content}>To become a leading fashion destination that inspires confidence, elegance, and individuality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <NewsSlleter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

