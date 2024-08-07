// import styles and images
import '../styles/FindTutorPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProfileImage from '../assets/profile-image.png'
import TutorTile from '../components/find_tutor/TutorTile';


function FindTutorPage () {

    return (
        <div className="find-tutor">
            <div className="search-section">
                <div className="search-field">
                    <div className="search-entry">
                        <FontAwesomeIcon className='lead-icons' icon="fa-solid fa-search"/>
                        <input 
                            type='text'
                            id='search' 
                            placeholder='Search' 
                        />
                    </div>
                </div>
            </div>
            <div className="results-section">
                <div className="stats">
                    stats
                </div>
                <div className="section-content">
                    <div className="filter">Filter</div>
                    <div className="list-items">
                        <TutorTile />
                        <TutorTile />
                    </div>



                    
                </div>
            </div>
        </div>
    )

}

export default FindTutorPage