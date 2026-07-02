import { assets } from "../../assets/assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faRotateLeft, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import styles from './hero.module.css'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate()
    return (
        <section className={styles.hero}>

            <div className={styles.hero_section}>
                <div className={styles.hero_left}>
                    <span className={styles.hero_tag}>NEW SEASON 2026</span>
                    <h1>
                        Elevate Your
                        <br />
                        Style With
                        <br />
                        <span className={styles.velora_brand}>Velora</span>
                    </h1>

                    <p>
                        Discover premium fashion crafted for
                        confidence, elegance, and comfort.
                    </p>

                    <div className={styles.hero_btns}>
                        <button onClick={() => navigate('/collection')}>Shop Now</button>
                        <button onClick={() => navigate('/collection')} className={styles.outline}>Explore</button>
                    </div>

                    <div className={styles.hero_features}>
                        <span><FontAwesomeIcon icon={faTruck} />
                            Free Shipping</span>
                        <span><FontAwesomeIcon icon={faRotateLeft} /> Easy Returns</span>
                        <span><FontAwesomeIcon icon={faShieldHalved} /> Secure Payment</span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero
