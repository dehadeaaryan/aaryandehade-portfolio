import styles from '../../styles/new/landing.module.css'
import React from 'react'
import Typed from 'typed.js'

const title = "AD"
const text = "Step into my digital realm, your gateway to my adventures."

export default function Landing() {

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['I\'m Aaryan Dehade', 'Driven by curiosity', 'Step into my digital realm', 'Your gateway to my adventures'],
            startDelay: 2500,
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 1500,
            loop: true,
        });
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {title}
            </h1>

            {/* <p className={styles.paragraph}>
                <span>{text}</span>
                <span className={styles.two}>{text}</span>
            </p> */}
            <div className={styles.typedText}><span ref={el} /></div>

        </div>
    )
}