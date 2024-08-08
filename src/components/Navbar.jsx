// import libraries
import React, {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import contexts
import { UserContext } from '../contexts/UserContext';

// import image and styling
import '../styles/Navbar.css'

const Navbar = () => {
  const {user} = useContext(UserContext);
  const navigate = useNavigate();

  //Routing for protected routes
  const handleProtectedRoute = (path) => {
    if (!user) {
      navigate('/login');
    } else {
      navigate(path);
    }
  };

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
            <p>Welcome {user.email}</p>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;