import styles from '../../styles/old/footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className={styles.box}>
            <Link href="/old">
                <a className={styles.link}>Home</a>
            </Link>
            <Link href="/old/projects">
                <a className={styles.link}>Projects</a>
            </Link>
            <Link href="/old/about">
                <a className={styles.link}>About</a>
            </Link>
            <Link href="/old/contact">
                <a className={styles.link}>Contact</a>
            </Link>
        </div>  
    )
}