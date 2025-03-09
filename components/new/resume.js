import styles from '../../styles/new/resume.module.css';
import React from 'react';

export default function Resume() {
    return (
        <div className={styles.resumeParent}>
            <div className={styles.resume}>
                <div className={styles.imageContainer}>
                    <img
                        src="ProfilePicture.jpg"
                        alt="Profile Picture"
                        className={styles.profileImage}
                    />
                </div>

                <div className={styles.resumeButtons}>
                    <button className={styles.modalButton2}>
                        <span>
                            <a className={styles.resumeDownloadLink} href="Resume.pdf" target="_blank" rel="noopener noreferrer">
                                Resume
                            </a>
                        </span>
                    </button>

                    <button className={styles.modalButton2}>
                        <span>
                            <a className={styles.resumeDownloadLink} href="CoverLetter.pdf" target="_blank" rel="noopener noreferrer">
                                Cover Letter
                            </a>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}