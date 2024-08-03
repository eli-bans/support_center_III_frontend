import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="name">SupportCenter</div>
      <div className="sub-pages">
        <div className="home">Home</div>
        <div className="tutor">Find a tutor</div>
        <div className="services">Services</div>
        <div className="about">About us</div>
      </div>
      <div className="register-buttons">
        <button className="sign-up">Sign Up</button>
        <button className="login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;