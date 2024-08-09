// External packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState, useContext} from 'react';
import { UserContext } from '../contexts/UserContext';
import {Link, useNavigate} from 'react-router-dom';

// styling and image imports
import '../styles/RegisterPage.css';
import BlackMeeting from '../assets/black-meeting.png';
import Footer from '../components/Footer';
import { SiTrueup } from 'react-icons/si';

function RegisterPage () {
    // Navigate after login
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);
    
    // Hide and show passwords
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // States for email and password values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Handle user registration
    const handleRegister = async (e) => {

        e.preventDefault();

        // Validate fields in form
        if(!email || !password || !confirmPassword) {
            alert('Please fill in all fields'); //TODO: Improve alert
            return;
        }

        // Validate passowrd format
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!passwordRegex.test(password)){
            alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lower case letter, a digit, and a symbol.')
            return;
        }

        // validate passwords are the same
        if(password != confirmPassword){
            alert('Passwords do not match');
            return;
        }

        try {

            const response = await fetch('http://127.0.0.1:8000/api/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email, 
                    password, 
                    is_student:true 
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                const errorMessage = Object.values(data).flat().join('\n');
                alert(errorMessage);
                throw new Error('Registration failed');
            }

            console.log('Registration successful:', data);

            // reset email
            setEmail('');
            setPassword('');
            setConfirmPassword('');

            // Set the password
            setShowPassword(false);
            setShowConfirmPassword(false);

            // Set User details
            // setUser(data);

            //navigate to login page
            navigate('/login');

        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    // Toggle confirm password data
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(prevState => !prevState);
    };

    //JSX output
    return (
        <div className="registerpage">
            <div className="form-segment">
                <div className="graphic">
                    <img src={BlackMeeting} alt="meeting graphic" />
                </div>
                <div className="form">
                    <form onSubmit={handleRegister}>
                    <h1>Create account</h1>

                        {/* Email section*/}
                        <div className="input-field">
                            <label htmlFor='email'>Email</label>
                            <div className="input-entry">
                                <FontAwesomeIcon className='lead-icons' icon="fa-solid fa-envelope"/>
                                <input type='email' id='email' placeholder='abcd@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>

                        {/* Password section*/}
                        <div className="input-field">
                            <label htmlFor='password'>Password</label>
                            <div className="input-entry">
                                <FontAwesomeIcon className='lead-icons' icon="fa-solid fa-key"/>
                                <input 
                                    type={showPassword ? 'text' : 'password'} 
                                    id='password' 
                                    placeholder='password' 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                                <FontAwesomeIcon className='trail-icons' icon="fa-solid fa-eye-slash" onClick={togglePasswordVisibility} />
                            </div>
                        </div>

                        {/* Confirm password section*/}
                        <div className="input-field">
                            <label htmlFor='confirm-password'>Confirm Password</label>
                            <div className="input-entry">
                                <FontAwesomeIcon className='lead-icons' icon="fa-solid fa-key"/>
                                <input type={showConfirmPassword ? 'text' : 'password'} id='confirm-password' placeholder='confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                <FontAwesomeIcon className='trail-icons' icon="fa-solid fa-eye-slash" onClick={toggleConfirmPasswordVisibility} />

                            </div>
                        </div>
                        <div className='end-text'>
                            <p className='advice'>Must be at least 8 characters</p>
                            <Link to='/forget-password'><p className='forget-password'>Forgot Password?</p></Link>
                        </div>
                        <button type='submit'>Sign Up</button>
                        <p className='existing-account'>Already have an account? <Link to='/login'><span>Login</span></Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default RegisterPage