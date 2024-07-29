import React from 'react';
import Navbar from '../common/Navbar';
import SignUpForm from '../auth/SignUpForm';
import '../styles/SignUp.css';
// import image from '../../assets/react.svg';


const SignUp = () => {
  return (
    <div className="signup-page">
      <Navbar />
      <div className="signup-content">
        <div className="left-section">
          {/* You can add an image or additional content here */}
          <img src="../../assets/react.svg" alt="SignUp Illustration" />
        </div>
        <div className="right-section">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;