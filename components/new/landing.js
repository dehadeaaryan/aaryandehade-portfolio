import styles from '../../styles/new/landing.module.css'

const title = "Student"
const text = "Explore this website to know more about me."

export default function Landing() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {title}
            </h1>
            <p className={styles.paragraph}>
                {text}
            </p>
        </div>
    )
}