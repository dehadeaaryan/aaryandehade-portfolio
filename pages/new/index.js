import Link from 'next/link'

import styles from '../../styles/new/index.module.css'

import Landing from '../../components/new/landing'
import Projects from '../../components/new/projects'
import About from '../../components/new/about'
import Contact from '../../components/new/contact'

import Separator1 from '../../components/svgs/separator1'

export default function Index() {

    const anchorStyle = {
        visibility: 'hidden',
        position: 'relative',
        top: '-6rem',
    }

    return (
        <div>
            <Header />
            
            
            <div className={styles.main}>
                <span style={anchorStyle} id="landing"></span>
                <div className={styles.div}>
                    <Landing/>
                </div>

                <HeaderProjects />

                <div className={styles.div}>
                    <span style={anchorStyle} id="projects"></span>
                    <Projects />
                </div>

                <HeaderAbout />

                <div className={styles.div}>
                    <span style={anchorStyle} id="about"></span>
                    <About />
                </div>

                <HeaderContact />

                <div className={styles.div}>
                    <span style={anchorStyle} id="contact"></span>
                    <Contact />
                </div>
            
            </div>

            <Footer />
        </div>
    )
}

const Header = () => (
    <div className={styles.header}>
        <Link href="/">
            <a className={styles.brand}>Aaryan Dehade</a>
        </Link>
        <Link href="./blog/"><a className={styles.blogLink}>Blog</a></Link>
    </div>
)

const HeaderProjects = () => (
    <div className={styles.subHeader}>
        <Separator1 />
        <h1>Projects</h1>
    </div>
)

const HeaderAbout = () => (
    <div className={styles.subHeader}>
        <h1>About</h1>
    </div>
)

const HeaderContact = () => (
    <div className={styles.subHeader}>
        <h1>Contact</h1>
    </div>
)

const Footer = () => (
    <div className={styles.footer}>
        <Link href="#landing">
            <a className={styles.link}>landing</a>
        </Link>

        <Link href="#projects">
            <a className={styles.link}>Projects</a>
        </Link>

        <Link href="#about">
            <a className={styles.link}>About</a>
        </Link>

        <Link href="#contact">
            <a className={styles.link}>Contact</a>
        </Link>
    </div>
)