import styles from '../styles/index.module.css'
import Project from '../components/project'

function Index0() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Under Construction</h1>
            </main>
        </div>
    )
}

export default function Index() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Project title="discord-bot-maker" link="https://github.com/dehadeaaryan/discord-bot-maker" />
                <Project title="pygame-builder" link="https://github.com/dehadeaaryan/pygame-builder" />
            </main>
        </div>
    )
}