import Link from 'next/link'
import styles from '../../styles/old/navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.box}>
            <h1 className={styles.title}>
                <Link href="/old/">
                    <a className={styles.link}>Aaryan Dehade</a>
                </Link>
            </h1>
        </div>
    )
}