// import styles and images
import '../../styles/TutorTile.css'
import ProfileImage from '../../assets/profile-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TutorTile (){

    return (
        <div className="list-item">

            <div className="graphic">
                <img className='image-profile' src={ProfileImage} alt="Image of profile" />
            </div>

            <div className="details">

                <div className="name-stars">

                    <p className="person-name">Daniel Chamberan  <span className='year'>C2025</span></p>
                    <div className="stars"><FontAwesomeIcon className='star-icon' icon="fa-regular fa-star" /> 5</div>

                </div>{/* Close name-stars*/}
                <div className="courses-profile">

                    <div className="courses">

                        <p>Courses:</p>
                        <div className="course-container">
                            <div className='course-box'>Databases</div>
                            <div className='course-box'>Databases</div>
                            <div className='course-box'>Databases</div>
                            <div className='course-box'>Databases</div>
                        </div>{/* Close course container*/}

                    </div>{/* Close courses*/}
                    <div className="profile-schedule">

                        <button className='profile'><FontAwesomeIcon icon="fa-regular fa-user" />  View Profile</button>
                        <button className='session'><FontAwesomeIcon icon="fa-regular fa-calendar" />  Schedule Session</button>

                    </div> {/* Close profile schedule*/}

                </div>{/* Close courses profile*/}

            </div>{/* Close dettails*/}

        </div>           
    )

}

export default TutorTile