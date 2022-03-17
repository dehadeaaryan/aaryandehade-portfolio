import styles from '../../styles/new/projects.module.css'

export default function Landing() {
    return (
        <div className={styles.container}>
            <Project title="discord-bot-maker" link="https://github.com/dehadeaaryan/discord-bot-maker" />
            <Project title="pygame-builder" link="https://github.com/dehadeaaryan/pygame-builder" />
        </div>
    )
}

function Project(props) {
    return (
        <a target="_blank" rel="noopener noreferrer" href={props.link} className={styles.project}>
            <div>{props.title}</div>
        </a>
    )
}