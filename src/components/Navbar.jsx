import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="name">SupportCenter</div>
      <div className="sub-pages">
        <Link to='/' className="home">Home</Link>
        <div className="tutor">Find a tutor</div>
        <div className="services">Services</div>
        <div className="about">About us</div>
      </div>
      <div className="register-buttons">
        <Link to='/register'>
          <button className="sign-up">Sign Up</button>
        </Link>
        <Link to='/login'>
          <button className="login">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;