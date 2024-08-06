import '../styles/RegisterPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react';
import BlackMeeting from '../assets/black-meeting.png';
import Footer from '../components/Footer';

function RegisterPage () {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(prevState => !prevState);
    };

    return (
        <div className="registerpage">
            <div className="form-segment">
                <div className="graphic">
                    <img src={BlackMeeting} alt="meeting graphic" />
                </div>
                <div className="form">
                    <form action="">
                    <h1>Create account</h1>
                        <div className="input-field">
                            <label htmlFor='email'>Email</label>
                            <div className="input-entry">
                                <FontAwesomeIcon className='lead-icons' icon="fa-solid fa-envelope"/>
                                <input type='email' id='email' placeholder='abcd@gmail.com' />
                            </div>
                        </div>
                        <div className="input-field">
                            <label htmlFor='password'>Password</label>
                            <div className="input-entry">
                                <FontAwesomeIcon className='lead-icons' icon="fa-solid fa-key"/>
                                <input type={showPassword ? 'text' : 'password'} id='password' placeholder='password' />
                                <FontAwesomeIcon className='trail-icons' icon="fa-solid fa-eye-slash" onClick={togglePasswordVisibility} />
                            </div>
                        </div>
                        <div className="input-field">
                            <label htmlFor='confirm-password'>Confirm Password</label>
                            <div className="input-entry">
                                <FontAwesomeIcon className='lead-icons' icon="fa-solid fa-key"/>
                                <input type={showConfirmPassword ? 'text' : 'password'} id='confirm-password' placeholder='confirm password' />
                                <FontAwesomeIcon className='trail-icons' icon="fa-solid fa-eye-slash" onClick={toggleConfirmPasswordVisibility} />

                            </div>
                        </div>
                        <div className='end-text'>
                            <p className='advice'>Must be at least 8 characters</p>
                            <p className='forget-password'>Forgot Password?</p>
                        </div>
                        <button type='submit'>Sign Up</button>
                        <p className='existing-account'>Already have an account? <span>Login</span></p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default RegisterPage