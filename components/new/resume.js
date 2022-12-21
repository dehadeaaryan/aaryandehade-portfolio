import styles from '../../styles/new/resume.module.css'

import React from 'react';
import Modal from 'react-modal';

export default function Resume() {
    
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
        },
        content: {
            top: '55%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            height: '80%',
            color: 'white',
            backgroundColor: 'black',
            border: 'none',
            padding: '0',
        },
    };

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {

    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return (

        <div className={styles.resume}>
            <button onClick={openModal} className={styles.modalButton}><span>Show</span></button>
            <button className={styles.modalButton2}><span><a className={styles.resumeDownloadLink} href="Resume.pdf" target="_blank">Download</a></span></button>


            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Modal">
                    <embed src='Resume.pdf' style={{ width: '100%', height: '100%' }}></embed>
            </Modal>
        </div>
    )
}