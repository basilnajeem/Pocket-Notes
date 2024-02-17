import React, { useState } from 'react';
import '../Style.css';
import homepage from '../assets/homepage.png';
import addIcon from '../assets/add-icon.svg';
import Modal from './Modal';

function LandingPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='main-wrapper'>
            <div className='sidebar'>
                <h1>Pocket Notes</h1>
                <div className='notes-wrapper'>
                    <div className='notes'>
                        <span className='notes-icon'>MN</span>My Notes
                    </div>
                    <div className='notes'>
                        <span className='notes-icon'>HR</span>Higher Resources
                    </div>
                </div>
                <button className='add-button' onClick={openModal}>
                    <img src={addIcon} alt='' />
                </button>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
            </div>
            <div className='page'>
                <div className='page-contents'>
                    <img src={homepage} alt='' />
                    <h1>Pocket Notes</h1>
                    <p>
                        Send and receive messages without keeping your phone online. <br />
                        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
                    </p>
                    <div className='encryption'>
                        <img src='/public/lock-icon.svg' alt='' />
                        end-to-end encrypted
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
