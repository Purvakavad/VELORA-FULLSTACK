import BestSallerProduct from '../../Components/bestSeller/BestSallerProduct'
import Hero from '../../Components/Hero/Hero'
import LatestCollection from '../../Components/latest/LatestCollection'
import NewsSlleter from '../../Components/news/NewsSlleter'
import OurPolicy from '../../Components/ourpolicy/OurPolicy'
import styles from './home.module.css'

const Home = () => {
    return (
        <div className={styles.home}>
            <Hero />
            <div className={styles.main_conatiner}>
                <LatestCollection />
                <BestSallerProduct />
                <OurPolicy />
                <NewsSlleter />
            </div>
        </div>
    )
}

export default Home
