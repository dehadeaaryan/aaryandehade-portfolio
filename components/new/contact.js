import styles from '../../styles/new/contact.module.css'

import Github from '../../icons/github'
import Linkedin from '../../icons/linkedin'
import Mail from '../../icons/mail'
import Message from '../../icons/message'

const githubLink = "https://github.com/dehadeaaryan"
const linkedinLink = "https://www.linkedin.com/in/dehadeaaryan/"
const mailLink = "mailto:aaryandehade@adehade.tech"
const messageLink = "../contact/"

export default function Contact() {
    return (
        <div className={styles.container}>
            <a target="_blank" href={githubLink} rel="noopener noreferrer" className={styles.link}><Github /></a>
            <a target="_blank" href={linkedinLink} rel="noopener noreferrer" className={styles.link}><Linkedin /></a>
            <a target="_blank" href={mailLink} rel="noopener noreferrer" className={styles.link}><Mail /></a>
            <a target="_blank" href={messageLink} rel="noopener noreferrer" className={styles.link}><Message /></a>
        </div>
    )
}