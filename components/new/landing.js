import styles from '../../styles/new/landing.module.css'

const title = "AD"
const text = "Step into my digital realm, your gateway to my adventures."

export default function Landing() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {title}
            </h1>
            
            <p className={styles.paragraph}>
                <span>{text}</span>
                <span className={styles.two}>{text}</span>
            </p>
        </div>
    )
}