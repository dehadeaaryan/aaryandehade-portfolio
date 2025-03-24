import { useState } from 'react';
import styles from '../../styles/new/projects.module.css'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const projects = [
    {
        title: 'DropThatClass',
        description: 'Up-to-date class reviews for students',
        link: 'https://www.dropthatclass.com/',
        categories: ['Web', 'Database', 'AI/ML'],
    },
    {
        title: 'SuperFrog Scheduler Backend',
        description: 'Java backend for SuperFrog Scheduler project with Spring Boot',
        link: 'https://github.com/dehadeaaryan/superfrog-scheduler-backend',
        categories: ['Java', 'Web', 'Database', 'Utilities'],
    },
    {
        title: 'SuperFrog Scheduler Frontend',
        description: 'Vue frontend for SuperFrog Scheduler project with Spring Boot',
        link: 'https://github.com/dehadeaaryan/superfrog-scheduler-backend',
        categories: ['Web', 'Utilities'],
    },
    {
        title: 'Marie Simulator',
        description: 'Simulator for MARIE (Machine Architecture that is Really Intuitive and Easy)',
        link: 'https://github.com/dehadeaaryan/marie-simulator',
        categories: ['Python', 'Utilities'],
    },
    {
        title: 'JustDropIt',
        description: 'Review classes on iOS application',
        link: 'https://github.com/dehadeaaryan/just-drop-it',
        categories: ['iOS', 'Database', 'Utilities'],
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
        link: 'https://github.com/dehadeaaryan/music-www',
        categories: ['Python', 'Database', 'Utilities'],
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
        title: 'Book Manager MySQL',
        description: 'Python application to manage databases',
        link: 'https://github.com/dehadeaaryan/book-manager-mysql',
        categories: ['Python', 'Database'],
    },
    {
        title: 'Book Manager Mongo',
        description: 'Python application to manage databases',
        link: 'https://github.com/dehadeaaryan/book-manager-mongo',
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
        link: 'https://github.com/dehadeaaryan/sudoku-solver',
        categories: ['Java', 'Utilities'],
    },
    {
        title: 'Maze Solver',
        description: 'Maze solver project for data structures',
        link: 'https://github.com/dehadeaaryan/maze-solver',
        categories: ['Java', 'Utilities'],
    },
    {
        title: 'Line Text Editor',
        description: 'Text editor created in Java',
        link: 'https://github.com/dehadeaaryan/line-text-editor',
        categories: ['Java', 'Utilities'],
    },
    {
        title: 'TCU Utils',
        description: 'Miscellaneous utilities for students',
        link: 'https://github.com/dehadeaaryan/tcu-utils',
        categories: ['Web', 'Utilities'],
    },
    {
        title: 'Pygame Builder',
        description: 'Python library to create games',
        link: 'https://github.com/dehadeaaryan/pygame-builder',
        categories: ['Python', 'Library'],
    },
    {
        title: 'ASL to English',
        description: 'Python project for converting American Sign Language to English text.',
        link: 'https://github.com/dehadeaaryan/asl-to-english',
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
        link: 'https://github.com/dehadeaaryan/tank-war-game',
        categories: ['Java'],
    },
    {
        title: 'Campus Concierge',
        description: 'Concierge platform for campus services',
        link: 'https://github.com/dehadeaaryan/campus-concierge',
        categories: ['Web', 'Utilities'],
    },
    {
        title: 'F1 Client',
        description: 'API client for live Formula 1 data',
        link: 'http://github.com/dehadeaaryan/f1-client',
        categories: ['Web', 'Utilities'],
    },
    {
        title: 'Twitter Client',
        description: 'iOS app written in Swift for Twitter',
        link: 'https://github.com/dehadeaaryan/ios-twitter',
        categories: ['iOS'],
    },
    {
        title: 'Parstagram',
        description: 'Instagram clone iOS app written in Swift',
        link: 'https://github.com/dehadeaaryan/ios-parstagram',
        categories: ['iOS', 'Database'],
    },
    {
        title: 'Calculator',
        description: 'iOS calculator app written in Swift',
        link: 'https://github.com/dehadeaaryan/ios-calculator',
        categories: ['iOS', 'Database'],
    },
    {
        title: 'Parallel Computing',
        description: 'Assignment for Parallel Computing Class',
        link: 'https://github.com/dehadeaaryan/parallel-computing-5',
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
        title: 'AaryanDehade.me',
        description: 'My personal website',
        link: 'https://github.com/dehadeaaryan/aaryandehade-portfolio',
        categories: ['Web'],
    },
    {
        title: 'ai.tcu.edu',
        description: 'Application for TCU AI',
        link: 'https://github.com/dehadeaaryan/tcu-ai',
        categories: ['Web'],
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
