// import library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import styles and images
import '../../styles/Modal.css';


function Modal ({isOpen, onClose, user}) {

    if(!isOpen) return null;

    return (
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
                        <button className='schedule-session'><FontAwesomeIcon icon="fa-regular fa-calendar" />  Schedule Session</button>
                    </div>
                    <div className="person-about">
                        <h1>Tutor Profile</h1>
                        <div>
                            <h2>ABOUT</h2>
                            <hr />
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit commodo sollicitudin, curabitur tincidunt velit et eu semper sapien quisque. Felis dis habitant porttitor platea molestie erat tempor, sapien purus ligula turpis vitae dapibus, phasellus nisl odio id eros metus. Fames nunc arcu sociis mollis nec iaculis fusce, tristique commodo scelerisque felis velit facilisis himenaeos eget, pulvinar proin lobortis ligula condimentum tincidunt.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal