import styles from '../../styles/new/projects.module.css'

import Tilt from 'react-parallax-tilt';

export default function ProjectsOld() {
    return (
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} transitionSpeed={2000} gyroscope={true} className={styles.tiltingArea}>
            <div className={styles.container}>
                <Project title="Marie Simulator - Simulate MARIE language" link="https://github.com/dehadeaaryan/MarieSimulator" />
                <Project title="JustDropIt - Review classes on iOS application" link="https://github.com/justDropIt/JustDropIt" />
                <Project title="Discord Bot Maker - Python library" link="https://github.com/dehadeaaryan/discord-bot-maker" />
                <Project title="Music.www - Play any song with extra controls" link="https://github.com/dehadeaaryan/Music.www" />
                <Project title="F1 Stats - Find live Formula 1 statistics" link="https://github.com/dehadeaaryan/openf1client" />
                <Project title="SuperFrog Scheduler - Schedule SuperFrog for an event" link="https://github.com/orgs/SuperFrog-Scheduler-2024/repositories" />
                <Project title="Quacker Bot - My favorite Discord bot" link="https://github.com/dehadeaaryan/quacker-bot-master" />
                <Project title="Turtler - Get started with Data Science" link="https://github.com/dehadeaaryan/turtler" />
                <Project title="Book Manager - Python application to manage databases" link="https://github.com/dehadeaaryan/BookManager_Aaryan_Dehade" />
                <Project title="Pygame builder - Python library to create games" link="https://github.com/dehadeaaryan/pygame-builder" />
                <Project title="Chess game" link="https://github.com/dehadeaaryan/chess" />
                <Project title="Sudoku Solver" link="https://github.com/dehadeaaryan/Sudoku-Solver" />
                <Project title="TCU Utils - Misc utilities for students" link="https://github.com/dehadeaaryan/tcuutilities" />
                <Project title="More - Visit my GitHub" link="https://github.com/dehadeaaryan" />

            </div>
        </Tilt>
    )
}

function Project(props) {
    return (
        <a target="_blank" rel="noopener noreferrer" href={props.link} className={styles.project}>
            <div className={styles.projectElement}><div>{props.title}</div><div className={styles.linkSymbol}>🔗</div></div>
        </a>
    )
}

function Projects() {
    return (
        <div className={styles.container}>
            <iframe src="https://www.github.com/dehadeaaryan/"></iframe>
        </div>
    )
}