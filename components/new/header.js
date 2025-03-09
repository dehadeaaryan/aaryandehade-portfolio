import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import styles from '../../styles/new/header.module.css';

export default function Header() {
    const [visible, setVisible] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // If within the first viewport, always show the header.
            if (currentScrollY < window.innerHeight) {
                setVisible(true);
            } else {
                // When scrolling up, show header; when scrolling down, hide it.
                if (currentScrollY < prevScrollY.current) {
                    setVisible(true);
                } else if (currentScrollY > prevScrollY.current) {
                    setVisible(false);
                }
            }
            prevScrollY.current = currentScrollY;
            // Close the mobile menu on scroll
            if (mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };

        const handleMouseMove = (e) => {
            // If user moves mouse into top 100px, reveal header when scrolled down
            if (window.scrollY >= window.innerHeight && e.clientY < 100) {
                setVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className={`${styles.header} ${visible ? styles.visible : styles.hidden}`}>
            <div className={styles.brandContainer}>
                <Link href="/">
                    <a className={styles.brand}>Aaryan Dehade</a>
                </Link>
            </div>
            <nav className={styles.nav}>
                {/* Desktop navigation */}
                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/blog">
                            <a className={styles.navItem}>Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#resume">
                            <a className={styles.navItem}>Profile</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#about">
                            <a className={styles.navItem}>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects">
                            <a className={styles.navItem}>Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact">
                            <a className={styles.navItem}>About</a>
                        </Link>
                    </li>
                </ul>
                {/* Hamburger menu for mobile */}
                <button className={styles.hamburger} onClick={toggleMobileMenu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </nav>
            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <ul className={styles.mobileNavLinks}>
                        <li>
                            <Link href="/blog">
                                <a onClick={() => setMobileMenuOpen(false)} className={styles.navItem}>
                                    Blog
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#resume">
                                <a onClick={() => setMobileMenuOpen(false)} className={styles.navItem}>
                                    Profile
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#about">
                                <a onClick={() => setMobileMenuOpen(false)} className={styles.navItem}>
                                    About
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects">
                                <a onClick={() => setMobileMenuOpen(false)} className={styles.navItem}>
                                    Projects
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact">
                                <a onClick={() => setMobileMenuOpen(false)} className={styles.navItem}>
                                    Contact
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
