import Link from 'next/link'
import styles from '../styles/index.module.css'

export default function Index() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Under Construction</h1>
                <Link href="./blog/"><a>Blog</a></Link>
            </main>
        </div>
    )
}