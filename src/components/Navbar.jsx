import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="name">Support Center</div>
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

{/* <div className="navbar-brand">
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
      </div> */}