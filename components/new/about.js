import Link from 'next/link'
import styles from '../../styles/new/about.module.css'

// const tcu = <a href='https://tcu.edu' target="_blank" rel="noopener noreferrer">Texas Christian University</a>
// const about = <p className={styles.about}>
//     Hi! I&apos;m Aaryan Dehade, a dedicated student at {tcu}, studying Computer Science and Math. Keep up with my journey here!
// </p>

const about = <p className={styles.about}>
    I am Aaryan Dehade, a software engineer and creative problem solver with a passion for coding, innovation, and building new solutions. <br /><br />
    My professional experience includes two internships at Qualcomm, where I contributed to engineering projects and honed my technical skills. In addition, I have served as a Community Manager at a residence hall, where I led a team to create an engaging and supportive environment. <br /><br />
    I have developed a variety of projects that demonstrate my technical expertise and innovative spirit. You can view these projects on my GitHub, which is linked in the Contact section of my website. <br /><br />
    I am dedicated to continuously pushing the boundaries of technology and look forward to leveraging my experience and creativity in new challenges.
</p>

// const aboutP = <p>{about}</p>

export default function About() {
    return (
        <div className={styles.container}>
            {about}
        </div>
    )
}