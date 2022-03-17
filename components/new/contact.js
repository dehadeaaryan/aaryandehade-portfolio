import styles from '../../styles/new/contact.module.css'

import Github from '../../icons/github'
import Linkedin from '../../icons/linkedin'
import Mail from '../../icons/mail'
import Message from '../../icons/message'

export default function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <a target="_blank" href="https://github.com/dehadeaaryan" rel="noopener noreferrer" className={styles.link}><Github /></a>
            </div>
            <div className={styles.box}>
                <a target="_blank" href="https://www.linkedin.com/in/aaryan-dehade-669b1921a/" rel="noopener noreferrer" className={styles.link}><Linkedin /></a>
            </div>
            <div className={styles.box}>
                <a target="_blank" href="mailto:aaryandehade@adehade.tech" rel="noopener noreferrer" className={styles.link}><Mail /></a>
            </div>
            <div className={styles.box}>
                <a target="_blank" href="../contact/" rel="noopener noreferrer" className={styles.link}><Message /></a>
            </div>
        </div>
    )
}