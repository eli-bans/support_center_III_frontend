// import libraries
import React, {useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import contexts
import { UserContext } from '../contexts/UserContext';

// import image and styling
import '../styles/Navbar.css'
import DefaultImage from '../assets/default_image.png';
import ProfileDropdown from './ProfileDropdown';

const Navbar = () => {
  const {user} = useContext(UserContext);
  const navigate = useNavigate();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  // Determine which image to display
  const userProfileImage = user && user.profile_picture ? user.profile_picture : DefaultImage;

  //Routing for protected routes
  const handleProtectedRoute = (path) => {
    if (!user) {
      navigate('/login');
    } else {
      navigate(path);
    }
  };

  // Open dropdown
  const openDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  }

  return (
    <nav className="navbar">
      <div className="name">SupportCenter</div>
      <div className="sub-pages">
        <Link to='/' className="home">Home</Link>
        <div className="tutor" onClick={() => handleProtectedRoute('/find-tutor')}>Find a tutor</div>
        <div className="services">Services</div>
        <div className="about">About us</div>
      </div>
      <div className="register-buttons">
        {!user ? (
          <>
            <Link to='/register'>
              <button className="sign-up">Sign Up</button>
            </Link>
            <Link to='/login'>
              <button className="login">Login</button>
            </Link>
          </>
        ) : (
          <>
            <div className='profile-button' onClick={openDropdown}>
              <img className='profile-img' src={userProfileImage} onClick={openDropdown}  alt='Profile Image'/>
              <FontAwesomeIcon className='dropdown-icon' icon="fa-solid fa-caret-down" />
              <ProfileDropdown isOpen={isDropDownOpen} />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;