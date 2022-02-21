import styles from '../styles/index.module.css'
import Project from '../components/project'

export default function Index0() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Under Construction</h1>
            </main>
        </div>
    )
}

function Index() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Project name="Under Construction" link="/" />
            </main>
        </div>
    )
}