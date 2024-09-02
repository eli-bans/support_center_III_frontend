import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Footer from '../components/Footer';
import '../styles/ProfilePage.css';
import DefaultImage from '../assets/default_image.jpg'

function ProfilePage() {

    return (
        <>
            <div className="profile-page">
                <div className="container">
                    <h1>Hello, Alvin</h1>
                    <p>Kindly edit and setup your profile however you see fit.</p>
                    <div className="account-info">
                        <h2>Account Info</h2>
                        <div className='details'>
                            <img src={DefaultImage} alt="Profile image" />
                            <p className='fullname'>Alvin Brocke</p>
                            <span className='star-count'><FontAwesomeIcon className='star-icon' icon="fa-regular fa-star" /> 5</span>
                            <div className="detail-breakdown">
                                <p>First Name: <span className="f-name">Alvin</span></p>
                                <p>Surname: <span className="s-name">Brocke</span></p>
                                <p>Year: <span className="year">2025</span></p>
                                <p>Email address: <span className="email">alvin@gmail.com</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="btn"><button>Edit Profile</button></div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProfilePage