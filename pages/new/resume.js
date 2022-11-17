import styles from '../../styles/new/index.module.css'

export default function Resume() {
    return (
        <div>
            <embed src='../../public/resume.pdf' className={styles.embed} />
        </div>
    )
}