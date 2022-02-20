import styles from '../styles/footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className={styles.box}>
            <Link href="/">
                <a className={styles.link}>Home</a>
            </Link>
            <Link href="/projects">
                <a className={styles.link}>Projects</a>
            </Link>
            <Link href="/about">
                <a className={styles.link}>About</a>
            </Link>
            <Link href="/contact">
                <a className={styles.link}>Contact</a>
            </Link>
        </div>  
    )
}