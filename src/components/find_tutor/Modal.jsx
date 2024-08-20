// import library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState, useEffect} from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'; 


//import styles and images
import '../../styles/Modal.css';
import BookingModal from './BookingModal';


function Modal ({isOpen, onClose, user}) {

    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [zegoMeeting, setZegoMeeting] = useState(null);
    const [isMeeting, setIsMeeting] = useState(false);


    // Modal for booking a meeting
    const openBookingModal = (calendlyUrl) => {
        setIsBookingModalOpen(true);
    };

    // Modal for closing the schedule modal
    const closeBookingModal = () => {
        setIsBookingModalOpen(false);
    };

    const joinMeeting = () => {
        setIsMeeting(true);
        onClose();
        const appID = 1826416831; // Replace with your ZEGOCLOUD App ID
        const serverSecret = "7f62f13e66f451dfa4a2206240297569"; // Replace with your ZEGOCLOUD Server Secret
        const roomID = user.id.toString(); // Use the tutor's userId as the room ID

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, user.id.toString(), user.firstname + ' ' + user.lastname);

        const zegoUIKit = ZegoUIKitPrebuilt.create(kitToken);
        setZegoMeeting(zegoUIKit);

        zegoUIKit.joinRoom({
            // container: document.getElementById('zego-container'),
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
                config: {
                    maxParticipants: 50
                }
            },
        });
    };

    useEffect(() => {
        return () => {
            // Clean up the meeting instance when the component unmounts
            if (zegoMeeting) {
                zegoMeeting.leaveRoom();
                setZegoMeeting(null);
                setIsMeeting(false);
                onClose();
            }
        };
    }, [zegoMeeting]);

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
                            <button className='video-meeting' onClick={joinMeeting}><FontAwesomeIcon icon="fa-solid fa-video" />  Join Meeting</button>
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
            
            {/* Conditionally render the Zego container */}
            {isMeeting && (
                <div id="zego-container" style={{ width: '100%', height: '600px', marginTop: '20px', zIndex: 2000 }}></div>
            )}

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