import styles from '../../styles/old/index.module.css'
import Project from '../../components/old/project'

import Layout from '../../components/old/layout'

export default function Index() {
    return (
        <Layout>
        <div className={styles.container}>
            <main className={styles.mainProjects}>
                <Project title="Turtler" link="https://github.com/dehadeaaryan/turtler" />
                <Project title="discord-bot-maker" link="https://github.com/dehadeaaryan/discord-bot-maker" />
                <Project title="pygame-builder" link="https://github.com/dehadeaaryan/pygame-builder" />
                <Project title="JustDropIt" link="https://github.com/justDropIt/JustDropIt" />
                <Project title="TCU Utils" link="https://github.com/dehadeaaryan/tcuutilities" />
                <Project title="Music.www" link="https://github.com/dehadeaaryan/music.www---new" />
                <Project title="Quacker" link="https://github.com/dehadeaaryan/quacker-bot-master" />
                <Project title="Sudoku Solver" link="https://github.com/dehadeaaryan/Sudoku-Solver" />
                <Project title="More" link="https://github.com/dehadeaaryan?tab=repositories" />
            </main>
        </div> 
        </Layout>
    )
}