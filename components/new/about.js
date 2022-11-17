import Link from 'next/link'
import styles from '../../styles/new/about.module.css'

const tcu = <a href='https://tcu.edu' target="_blank" rel="noopener noreferrer">Texas Christian University</a>
const about = <p className={styles.about}>
Intellectually curious and dependable student with genuine passion for technology. Currently studying at {tcu}, I am a Sophomore Computer Science major eager to be challenged.
</p>

export default function About() {
    return (
        <div className={styles.container}>
            <p>{about}</p>
        </div>
    )
}