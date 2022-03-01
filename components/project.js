import styles from '../styles/project.module.css'

export default function Project(props) {
    return (
        <a target="_blank" rel="noopener noreferrer" href={props.link} className={styles.project}>
            <div>{props.title}</div>
        </a>
    )
}