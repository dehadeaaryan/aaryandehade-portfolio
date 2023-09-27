import Link from 'next/link'
import styles from '../../styles/new/about.module.css'

const tcu = <a href='https://tcu.edu' target="_blank" rel="noopener noreferrer">Texas Christian University</a>
const about = <p className={styles.about}>
Hi! I am Aaryan Dehade, a Computer Science enthusiast currently pursuing my Bachelor of Science degree at {tcu}, with a minor in Mathematics. Feel free to explore my experiences and connect with me on this platform.
</p>

export default function About() {
    return (
        <div className={styles.container}>
            <p>{about}</p>
        </div>
    )
}