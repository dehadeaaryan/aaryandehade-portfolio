import { useState } from 'react';
import styles from '../../styles/new/projects.module.css'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const projects = [
    {
        title: 'DropThatClass',
        description: 'Up-to-date class reviews for students',
        link: 'https://github.com/dehadeaaryan',
        categories: ['Web', 'AI/ML'],
    },
    {
        title: 'Marie Simulator',
        description: 'Simulator for MARIE (Machine Architecture that is Really Intuitive and Easy)',
        link: 'https://github.com/dehadeaaryan/MarieSimulator',
        categories: ['Python', 'Utilities'],
    },
    {
        title: 'JustDropIt',
        description: 'Review classes on iOS application',
        link: 'https://github.com/justDropIt/JustDropIt',
        categories: ['iOS', 'Utilities'],
    },
    {
        title: 'Discord Bot Maker',
        description: 'Python library for creating Discord bots',
        link: 'https://github.com/dehadeaaryan/discord-bot-maker',
        categories: ['Python', 'Library'],
    },
    {
        title: 'Music.www',
        description: 'Play any song with extra controls',
        link: 'https://github.com/dehadeaaryan/Music.www',
        categories: ['Python', 'Music'],
    },
    {
        title: 'F1 Stats',
        description: 'Find live Formula 1 statistics',
        link: 'https://github.com/dehadeaaryan/openf1client',
        categories: ['Web', 'Utilities'],
    },
    {
        title: 'Quacker Bot',
        description: 'My favorite Discord bot',
        link: 'https://github.com/dehadeaaryan/quacker-bot-master',
        categories: ['Python', 'Utilities'],
    },
    {
        title: 'Turtler',
        description: 'Get started with Data Science',
        link: 'https://github.com/dehadeaaryan/turtler',
        categories: ['Python', 'Library'],
    },
    {
        title: 'Book Manager',
        description: 'Python application to manage databases',
        link: 'https://github.com/dehadeaaryan/BookManager_Aaryan_Dehade',
        categories: ['Python', 'Database'],
    },
    {
        title: 'Chess Game',
        description: 'Chess game in Python',
        link: 'https://github.com/dehadeaaryan/chess',
        categories: ['Python', 'Game Development'],
    },
    {
        title: 'Sudoku Solver',
        description: 'A Sudoku Solver implemented in Python',
        link: 'https://github.com/dehadeaaryan/Sudoku-Solver',
        categories: ['Java', 'Utilities'],
    },
    {
        title: 'TCU Utils',
        description: 'Miscellaneous utilities for students',
        link: 'https://github.com/dehadeaaryan/tcuutilities',
        categories: ['Web', 'Utilities'],
    },
    {
        title: 'Pygame Builder',
        description: 'Python library to create games',
        link: 'https://github.com/dehadeaaryan/pygame-builder',
        categories: ['Python', 'Library'],
    },
    {
        title: 'SuperFrog Scheduler Backend',
        description: 'Java backend for SuperFrog Scheduler project with Spring Boot',
        link: 'https://github.com/dehadeaaryan/superfrogschedulerbackend',
        categories: ['Java', 'Web', 'Utilities'],
    },
    {
        title: 'MediaPipe',
        description: 'Google’s MediaPipe framework for building pipelines for ML models',
        link: 'https://github.com/dehadeaaryan/mediapipe',
        categories: ['Python', 'AI/ML'],
    },
    {
        title: 'aslToEnglish',
        description: 'Python project for converting American Sign Language to English text.',
        link: 'https://github.com/dehadeaaryan/aslToEnglish',
        categories: ['Python', 'AI/ML'],
    },
    {
        title: 'AI Making Shopping Smart',
        description: 'AI-based project for smarter shopping experiences',
        link: 'https://github.com/dehadeaaryan/ai-making-shopping-smart',
        categories: ['Python', 'AI/ML'],
    },
    {
        title: 'AI Search and Games',
        description: 'AI algorithms for game theory and search problems',
        link: 'https://github.com/dehadeaaryan/ai-search-and-games',
        categories: ['Python', 'AI/ML'],
    },
    {
        title: 'Tank War Game',
        description: '2D action game inspired by Battle City',
        link: 'https://github.com/dehadeaaryan/tankwargame',
        categories: ['Java'],
    },
    {
        title: 'Campus Concierge',
        description: 'Concierge platform for campus services',
        link: 'https://github.com/dehadeaaryan/campusconcierge',
        categories: ['Web', 'Utilities'],
    },
    {
        title: 'Quack',
        description: 'Hackathon project to organize group activities',
        link: 'https://github.com/dehadeaaryan/quack',
        categories: ['Python', 'AI/ML'],
    },
    {
        title: 'OpenF1Client',
        description: 'API client for live Formula 1 data',
        link: 'https://github.com/dehadeaaryan/openf1client',
        categories: ['Web', 'Utilities'],
    },
    {
        title: 'Twitter iOS',
        description: 'iOS app written in Swift for Twitter',
        link: 'https://github.com/dehadeaaryan/twitter_ios',
        categories: ['iOS'],
    },
    {
        title: 'Parallel Computing Homework 5',
        description: 'Homework assignment for Parallel Computing Class',
        link: 'https://github.com/dehadeaaryan/pc-hw-5',
        categories: ['C'],
    },
    {
        title: 'Rabbit Fox Island',
        description: 'C-based game project with MIT License',
        link: 'https://github.com/dehadeaaryan/rabbit-fox-island',
        categories: ['C', 'Parallel Computing'],
    },
    {
        title: 'Hogwarts Artifacts Online',
        description: 'Java-based website with artifacts from Hogwarts',
        link: 'https://github.com/dehadeaaryan/hogwarts-artifacts-online',
        categories: ['Java', 'Web'],
    },
    {
        title: 'Blog.AaryanDehade.Me',
        description: 'Personal blog built with TypeScript and Node.js',
        link: 'https://github.com/dehadeaaryan/blog.aaryandehade.me',
        categories: ['Web'],
    },
    {
        title: 'AaryanDehade.me',
        description: 'My personal website',
        link: 'https://github.com/dehadeaaryan/aaryandehade.me',
        categories: ['Web'],
    },
    {
        title: 'MazeSolver-DehadeAaryan',
        description: 'Maze solver project for data structures class',
        link: 'https://github.com/dehadeaaryan/mazesolver-dehadeaaryan',
        categories: ['Java'],
    },
    {
        title: 'More Projects',
        description: 'Visit my GitHub for more projects',
        link: 'https://github.com/dehadeaaryan',
        categories: ['Miscellaneous'],
    },
];


const categories = [
    'All',
    'Python',
    'Java',
    'iOS',
    'Web',
    'Library',
    'Utilities',
    'Database',
    'C',
    'Parallel Computing',
    'AI/ML',
    'Miscellaneous',
];

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = projects.filter((project) =>
        selectedCategory === 'All' ||
        project.categories.some((category) => category === selectedCategory)
    );

    return (
        <div className={styles.container}>
            <div className={styles.tabList}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={classNames(
                            styles.tab,
                            selectedCategory === category ? styles.tabSelected : ''
                        )}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className={styles.tabPanels}>
                <div className={styles.tabPanel}>
                    {filteredProjects.length === 0 ? (
                        <p className={styles.noProjects}>No projects available in this category</p>
                    ) : (
                        <div className={styles.projectsGrid}>
                            {filteredProjects.map((project) => (
                                <a
                                    key={project.title}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.projectCard}
                                >
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDescription}>
                                        {project.description}
                                    </p>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
