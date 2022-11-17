import Link from 'next/link'

import styles from '../../styles/new/index.module.css'

import Header from '../../components/new/header'
import Footer from '../../components/new/footer'

import Landing from '../../components/new/landing'
import Projects from '../../components/new/projects'
import About from '../../components/new/about'
import Resume from '../../components/new/resume'
import Skills from '../../components/new/skills'
import Contact from '../../components/new/contact'

import LandingSeparator from '../../components/svgs/separator1'

export default function Index() {

    const anchorStyle = {
        visibility: 'hidden',
        position: 'relative',
        top: '-6rem',
    }

    let state = {
        show: false
    }

    function showModal(e) {
        setState({
            show: true
          });
    }

    return (
        <div>
            <Header />

            <div className={styles.main}>
                <span style={anchorStyle} id="landing"></span>
                <span className={styles.np}></span>
                <div className={styles.div}>
                    <Landing/>
                </div>
                
                <HeaderProjects />

                <div className={styles.div}>
                    <span style={anchorStyle} id="projects"></span>
                    <div className={styles.projectsContainer}>
                        <Projects />
                    </div>
                </div>

                <HeaderAbout />

                <div className={styles.div}>
                    <span style={anchorStyle} id="about"></span>
                    <About />
                </div>

                {/* <HeaderResume />

                <div className={styles.div}>
                    <span style={anchorStyle} id="resume"></span>
                    <Resume show={state.show} />
                    <button onClick={(e) => {showModal()} }>Show</button>
                </div> */}

                {/* <HeaderSkills />

                <div className={styles.div}>
                    <span style={anchorStyle} id="Skills"></span>
                    <Skills />
                </div> */}

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

const HeaderProjects = () => (
    <div className={styles.subHeader}>
        <div className={styles.landingSeparator}>
            <LandingSeparator />
        </div>
        <h2>Projects</h2>
    </div>
)

const HeaderAbout = () => (
    <div className={styles.subHeader}>
        <h1>About</h1>
    </div>
)

const HeaderResume = () => (
    <div className={styles.subHeader}>
        <h1>Resume</h1>
    </div>
)

const HeaderSkills = () => (
    <div className={styles.subHeader}>
        <h1>Skills</h1>
    </div>
)

const HeaderContact = () => (
    <div className={styles.subHeader}>
        <h1>Contact</h1>
    </div>
)