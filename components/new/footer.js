import styles from '../../styles/new/footer.module.css'
import FooterSeparator from '../svgs/separator2'
import Link from 'next/link'

export default function Footer() {
    return (
        <div id='footer'>
            <div className={styles.footerSeparator}>
                <FooterSeparator />
            </div>
            <div className={styles.footer}>
                <Link href="#landing">
                    <a className={styles.link}>Home</a>
                </Link>

                <Link href="#resume">
                    <a className={styles.link}>Profile</a>
                </Link>

                <Link href="#about">
                    <a className={styles.link}>About</a>
                </Link>

                <Link href="#projects">
                    <a className={styles.link}>Projects</a>
                </Link>

                <Link href="#contact">
                    <a className={styles.link}>Contact</a>
                </Link>
                <span className={styles.link}></span>
            </div>
            <div className={styles.copyright}>2025 Aaryan Dehade</div>
        </div>
    )
}