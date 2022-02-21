import Navbar from './navbar'
import Footer from './footer'

import styles from '../styles/layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Navbar className={styles.navbar}/>
            <main className={styles.main}>{children}</main>
            <Footer className={styles.footer}/>
        </div>
    )
}