import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="bold">S</span>UPPORT<span className="bold">C</span>ENTER
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Find a Tutor</li>
        <li className="navbar-item">Services</li>
        <li className="navbar-item">About Us</li>
      </ul>
      <div className="navbar-buttons">
        <button className="btn signup">Sign Up</button>
        <button className="btn login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;