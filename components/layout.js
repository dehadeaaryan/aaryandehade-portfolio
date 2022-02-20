import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'

import styles from '../styles/layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Aaryan Dehade</title>
                <meta name="description" content="Aaryan's online portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar className={styles.navbar}/>
            <main className={styles.main}>{children}</main>
            <Footer className={styles.footer}/>
        </div>
    )
}