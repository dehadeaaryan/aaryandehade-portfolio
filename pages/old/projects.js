import styles from '../../styles/old/index.module.css'
import Project from '../../components/old/project'

import Layout from '../../components/old/layout'

export default function Index() {
    return (
        <Layout>
        <div className={styles.container}>
            <main className={styles.main}>
                <Project title="discord-bot-maker" link="https://github.com/dehadeaaryan/discord-bot-maker" />
                <Project title="pygame-builder" link="https://github.com/dehadeaaryan/pygame-builder" />
            </main>
        </div>
        </Layout>
    )
}