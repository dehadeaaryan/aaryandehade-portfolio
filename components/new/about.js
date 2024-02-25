import Link from 'next/link'
import styles from '../../styles/new/about.module.css'

const tcu = <a href='https://tcu.edu' target="_blank" rel="noopener noreferrer">Texas Christian University</a>
const about = <p className={styles.about}>
Greetings! I&apos;m Aaryan Dehade, a dedicated Computer Science student at {tcu}, also specializing in Mathematics. Explore my journey, projects, and accomplishments on this platform. Let&apos;s connect and share our experiences in the dynamic world of technology!
</p>

export default function About() {
    return (
        <div className={styles.container}>
            <p>{about}</p>
        </div>
    )
}