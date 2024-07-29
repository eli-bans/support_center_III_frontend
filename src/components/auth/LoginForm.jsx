import React from 'react';
import { FaEnvelope, FaKey, FaEye, FaEyeSlash, FaGoogle, FaGithub } from 'react-icons/fa';
import '../styles/SignUpForm.css';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1 className="signup-title">Welcome back!</h1>
        
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <div className="input-wrapper">
            <FaEnvelope className="input-icon" />
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="input-wrapper">
            <FaKey className="input-icon" />
            <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your password" />
            <button className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEye className="eye-icon" /> : <FaEyeSlash className="eye-icon" />}
            </button>
          </div>
        </div>

        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>

        <button className="signup-button">Login</button>

        <div className="or-divider">
          <span>OR</span>
        </div>

        <div className="social-buttons">
          <button className="google-button">
            <FaGoogle className="social-icon" /> Google
          </button>
          <button className="github-button">
            <FaGithub className="social-icon" /> GitHub
          </button>
        </div>

        <div className="login-link">
          Don't have an account? <a href="#">Register</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

