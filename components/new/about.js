import Link from 'next/link'
import styles from '../../styles/new/about.module.css'

const tcu = <a href='https://tcu.edu' target="_blank" rel="noopener noreferrer">Texas Christian University</a>
const about = <p className={styles.about}>
    Hi! I&apos;m Aaryan Dehade, a dedicated student at {tcu}, studying Computer Science and Math. Keep up with my journey here!
</p>

export default function About() {
    return (
        <div className={styles.container}>
            <p>{about}</p>
        </div>
    )
}