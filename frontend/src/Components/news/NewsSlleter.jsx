import styles from './news.module.css'
const NewsSlleter = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <div className={styles.news_section}>
                <div className={styles.news_content}>
                    <div>
                        <h2>Join the Velora Community</h2></div>
                    <div><p>Subscribe to get exclusive offers,new arrivals,and fashion updates.</p></div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.subscribe}>
                                <input type="email" className={styles.email_input} placeholder="Enter your email address" />
                                <button type="submit" className={styles.newBtn}>Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default NewsSlleter
