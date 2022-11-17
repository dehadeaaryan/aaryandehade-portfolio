import Link from 'next/link'

import styles from '../../styles/new/header.module.css'

export default function Header() {
    return (
    <div className={styles.header}>
        <Link href="/">
            <a className={styles.brand}>Aaryan Dehade</a>
        </Link>
        <Link href="./blog/"><a className={styles.blogLink}>Blog</a></Link>
    </div>
)
}