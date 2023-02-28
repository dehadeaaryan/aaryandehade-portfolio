import styles from '../../styles/new/contact.module.css'

import Mail from '../../icons/mail'
import Message from '../../icons/message'
import Github from '../../icons/github'
import Linkedin from '../../icons/linkedin'
// import Hackerrank from '../../icons/hackerrank'

const mailLink = "mailto:aaryanadehade@gmail.com"
const messageLink = "../contact/"
const githubLink = "https://github.com/dehadeaaryan"
const linkedinLink = "https://www.linkedin.com/in/aaryandehade/"
// const hackerrankLink = "https://www.hackerrank.com/dehadeaaryan"

export default function Contact() {
    return (
        <div className={styles.container}>
            <a target="_blank" href={mailLink} rel="noopener noreferrer" className={styles.link}><Mail /></a>
            <a target="_blank" href={messageLink} rel="noopener noreferrer" className={styles.link}><Message /></a>
            <a target="_blank" href={githubLink} rel="noopener noreferrer" className={styles.link}><Github /></a>
            <a target="_blank" href={linkedinLink} rel="noopener noreferrer" className={styles.link}><Linkedin /></a>
            {/* <a target="_blank" href={Hackerrank} rel="noopener noreferrer" className={styles.link}><Hackerrank /></a> */}
            <span className={styles.link}></span>
        </div>
    )
}