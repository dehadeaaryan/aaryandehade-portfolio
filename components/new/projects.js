import styles from '../../styles/new/projects.module.css'

export default function ProjectsOld() {
    return (
        <div className={styles.container}>
            <Project title="discord-bot-maker" link="https://github.com/dehadeaaryan/discord-bot-maker" />
            <Project title="pygame-builder" link="https://github.com/dehadeaaryan/pygame-builder" />
            <Project title="JustDropIt" link="https://github.com/justDropIt/JustDropIt" />
            <Project title="TCU Utils" link="https://github.com/dehadeaaryan/tcuutilities" />
            <Project title="Music.www" link="https://github.com/dehadeaaryan/music.www---new" />
            <Project title="Quacker" link="https://github.com/dehadeaaryan/quacker-bot-master" />
            <Project title="Sudoku Solver" link="https://github.com/dehadeaaryan/Sudoku-Solver" />
            <Project title="More" link="https://github.com/TCU-COSC-MCS-DSA" />
            
        </div>
    )
}

function Project(props) {
    return (
        <a target="_blank" rel="noopener noreferrer" href={props.link} className={styles.project}>
            <div className={styles.projectElement}><div>{props.title}</div><div className={styles.linkSymbol}>🔗</div></div>
        </a>
    )
}

function Projects() {
    return (
        <div className={styles.container}>
            <iframe src="https://www.github.com/dehadeaaryan/"></iframe>
        </div>
    )
}