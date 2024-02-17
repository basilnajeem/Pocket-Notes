// Modal.jsx
import React from 'react';
import '../Style.css'; // Make sure to import your CSS file

function Modal({ isOpen, onClose }) {
    const handleOverlayClick = () => {
        onClose();
    };
    const handleContentClick = (event) => {
        // Prevent the event from reaching the overlay
        event.stopPropagation();
    };
    return (
        isOpen && (
            <div className='overlay' onClick={handleOverlayClick}>
                <div className='modal-wrapper' onClick={handleContentClick}>
                    <div className='modal-header'>
                        <h1>Create New group</h1>
                    </div>
                    <div className='modal-content'>
                        <div className='create-group'>
                            <p>Group Name</p>
                            <input type="text" placeholder='Enter group name' />
                        </div>
                        <div className='select-color'>
                            <p>Choose colour</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button>Create</button>
                    </div>
                </div>
            </div>
        )
    );
}

export default Modal;
