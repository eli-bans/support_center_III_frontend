import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import '../styles/ForgotPwdForm.css';

const ForgotPasswordForm = () => {
  return (
    <div className="forgot-password-frame">
      <h1 className="forgot-password-title">Forgot Password</h1>
      <p className="forgot-password-description">
        Enter the email address or mobile phone number associated with your SupportCenter account.
      </p>
      <p className="forgot-password-note">
        An email with further instructions will be sent.
      </p>
      <div className="input-group">
        <label htmlFor="email" className="input-label">Email</label>
        <div className="input-wrapper">
          <FaEnvelope className="input-icon" />
          <input type="email" id="email" placeholder="Enter your email" className="email-input" />
        </div>
      </div>
      <button className="send-email-button">SEND EMAIL</button>
      <div className="links">
        <p>
          Already have an account? <a href="#" className="link">Log in</a>
        </p>
        <p>
          Don't have an account? <a href="#" className="link">Register</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
