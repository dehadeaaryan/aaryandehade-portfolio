import Link from 'next/link'
import styles from '../styles/index.module.css'

const tcu = <a href='https://tcu.edu' target="_blank" rel="noopener noreferrer">Texas Christian University.</a>

const about = <p>
Aaryan Dehade is currently pursuing a Bachelor's degree in Computer Science at {tcu}
He is a freshman with a passion for programming and learning new technologies.
</p>

export default function Index() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <p>{about}</p>
                <Link href="./blog/"><a className={styles.topRight}>Blog</a></Link>
            </main>
        </div>
    )
}