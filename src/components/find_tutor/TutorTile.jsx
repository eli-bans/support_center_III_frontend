// import styles and images
import '../../styles/TutorTile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TutorTile ({
    firstname, lastname, 
    image_path, stars, courses, 
    year,  onViewProfile, onScheduleMeeting
}){

    return (
        <div className="list-item">

            <div className="graphic">
                <img className='image-profile' src={image_path} alt="Image of profile" />
            </div>

            <div className="details">

                <div className="name-stars">

                    <p className="person-name">{firstname} {lastname}  <span className='year'>{year}</span></p>
                    <div className="stars"><FontAwesomeIcon className='star-icon' icon="fa-regular fa-star" /> {stars}</div>

                </div>{/* Close name-stars*/}
                <div className="courses-profile">

                    <div className="courses">

                        <p>Courses:</p>
                        <div className="course-container">
                            {courses.map((course, index) => (
                                <div className='course-box' key={index}>{course}</div>
                            ))}
                        </div>{/* Close course container*/}

                    </div>{/* Close courses*/}
                    <div className="profile-schedule">

                        <button className='profile' onClick={onViewProfile}><FontAwesomeIcon icon="fa-regular fa-user" />  View Profile</button>
                        <button className='session' onClick={onScheduleMeeting}><FontAwesomeIcon icon="fa-regular fa-calendar" />  Schedule Session</button>

                    </div> {/* Close profile schedule*/}

                </div>{/* Close courses profile*/}

            </div>{/* Close dettails*/}

        </div>           
    )

}

export default TutorTile