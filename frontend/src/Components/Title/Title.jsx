import styles from './title.module.css'
const Title = ({ text1, text2, breakLine = false }) => {
    return (
        <div>
            <div className={styles.latest_section}>
                {/* <h1 className={styles.latest_heading}>{text1}</h1>
                <h1 className={styles.collection_heading}>{text2}</h1><hr className={styles.latest_hr} /> */}
                <h1 className={styles.latest_heading}>
                    <span className={styles.main_heading}>{text1}</span>
                    {breakLine && <br className={styles.mobileBreak} />}
                    <span className={styles.collection_heading}>
                        {text2}
                    </span>
                    <hr className={styles.latest_hr} />
                </h1>
            </div >
        </div >
    )
}

export default Title
