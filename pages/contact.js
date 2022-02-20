import styles from '../styles/contact.module.css'

import Github from '../icons/github'
import Linkedin from '../icons/linkedin'
import Mail from '../icons/mail'
import Message from '../icons/message'

export default function Contact() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                    <a target="_blank" href="https://github.com/dehadeaaryan" rel="noopener noreferrer" className={styles.link}><Github /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/aaryan-dehade-669b1921a/" rel="noopener noreferrer" className={styles.link}><Linkedin /></a>
                    <a target="_blank" href="mailto:dehadeaaryan@gmail.com" rel="noopener noreferrer" className={styles.link}><Mail /></a>
                    <a target="_blank" href="../contact-form" rel="noopener noreferrer" className={styles.link}><Message /></a>
            </main>
        </div>
    )
}