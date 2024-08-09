// import library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react';

//import styles and images
import '../../styles/Modal.css';
import BookingModal from './BookingModal';


function Modal ({isOpen, onClose, user}) {

    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    // Modal for booking a meeting
    const openBookingModal = (calendlyUrl) => {
        setIsBookingModalOpen(true);
    };

    // Modal for closing the schedule modal
    const closeBookingModal = () => {
        setIsBookingModalOpen(false);
    };

    if(!isOpen) return null;

    return (
        <>
            <div className="overlay">
                <div className="modal-content">
                    <button className="close-button" onClick={onClose}>X</button>
                    <div className="info">
                        <div className="selected-person">
                            <img src={user.image_path} alt="" />
                            <h1 className='person-name'>{user.firstname} {user.lastname} <span className='year'>C{user.year}</span></h1>
                            <div className="stars"><FontAwesomeIcon className='star-icon' icon="fa-regular fa-star" /> {user.stars}</div>
                            <hr />
                            <p className='course-title'>Courses:</p>
                            <div className="course-container">
                                {user.courses.map((course, index) => (
                                    <div className='course-box' key={index}>{course}</div>
                                ))}
                            </div>
                            <button className='schedule-session' onClick={openBookingModal}><FontAwesomeIcon icon="fa-regular fa-calendar" />  Schedule Session</button>
                        </div>
                        <div className="person-about">
                            <h1>Tutor Profile</h1>
                            <div>
                                <h2>ABOUT</h2>
                                <hr />
                            </div>
                            <p>
                                {user.about}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*Modal for booking*/}
            <BookingModal 
                isOpen={isBookingModalOpen}
                onClose={closeBookingModal}
                calendlyUrl={user.calendlyUrl}
            />
        </>

    )
}

export default Modal