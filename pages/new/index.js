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

import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#landing');

export default function Index() {
    const [showButton, setShowButton] = React.useState(false);
    const prevScrollY = React.useRef(0);

    const handleScrollToFooter = () => {
        const footer = document.getElementById('footer');
        footer?.scrollIntoView({ behavior: 'smooth' });
    };

    // Show scroll button on mobile when scrolled past one viewport and scrolling down
    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (window.innerWidth <= 860) { // Mobile devices
                if (currentScrollY < window.innerHeight) {
                    setShowButton(false);
                } else {
                    if (currentScrollY > prevScrollY.current) {
                        // Scrolling down: show button
                        setShowButton(true);
                    } else {
                        // Scrolling up: hide button
                        setShowButton(false);
                    }
                }
            }
            prevScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                <span className={styles.np}></span>
                <div className={styles.div}>
                    <Landing />
                </div>

                <div className={styles.landingSeparator}>
                    <LandingSeparator />
                </div>

                <HeaderResume />

                <div className={styles.div}>
                    <span style={anchorStyle} id="resume"></span>
                    <Resume />
                </div>

                <HeaderAbout />

                <div className={styles.div}>
                    <span style={anchorStyle} id="about"></span>
                    <About />
                </div>

                <HeaderProjects />

                <div className={styles.div}>
                    <span style={anchorStyle} id="projects"></span>
                    <div className={styles.projectsContainer}>
                        <Projects />
                    </div>
                </div>

                {/* Uncomment if needed */}
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

            {/* Always render the button, but use CSS classes to transition its visibility */}
            <button
                className={`${styles.scrollToFooterButton} ${showButton ? styles.visibleButton : styles.hiddenButton}`}
                onClick={handleScrollToFooter}
            >
                ↓
            </button>
        </div>
    )
}

const HeaderProjects = () => (
    <div className={styles.subHeader}>
        <h2>Projects</h2>
    </div>
)

const HeaderAbout = () => (
    <div className={styles.subHeader}>
        <h2>About</h2>
    </div>
)

const HeaderResume = () => (
    <div className={styles.subHeader}>
        <h2>Profile</h2>
    </div>
)

const HeaderSkills = () => (
    <div className={styles.subHeader}>
        <h2>Skills</h2>
    </div>
)

const HeaderContact = () => (
    <div className={styles.subHeader}>
        <h2>Contact</h2>
    </div>
)
