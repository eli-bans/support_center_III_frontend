// External packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';

// Import contexts
import { UserContext } from '../contexts/UserContext';

// styling and image imports
import '../styles/LoginPage.css';
import Footer from '../components/Footer';
import TwoBlackMen from '../assets/two-black-men.png';

function LoginPage () {

    // user states
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    
    // Hide and show password
    const [showPassword, setShowPassword] = useState(false);

    // States for email and password values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle user registration
    const handleLogin = async (e) => {

        e.preventDefault();

        // Validate fields in form
        if(!email || !password) {
            alert('Please fill in all fields'); //TODO: Improve alert
            return;
        }

        // Validate passowrd format
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!passwordRegex.test(password)){
            alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lower case letter, a digit, and a symbol.')
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const data = await response.json();
            console.log('Registration successful:', data);

            // Determine user role
            const role = data.is_student ? 'student' : data.is_tutor ? 'tutor' : 'admin';

            setUser({
                "id": response.id,
                "email": response.email,
                "role": role,
                "profile_picture": response.profile_picture
            });

            // reset email
            setEmail('');
            setPassword('');

            // Set the password
            setShowPassword(false);

            // Navigate back to home page
            switch (role) {
                case 'student':
                    navigate('/');
                    break;
                case 'tutor':
                    navigate('/');
                    break;
                case 'admin':
                    navigate('/admin-dashboard');
                    break;
            }

        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed. Please try again.');
        }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    //JSX output
    return (
        <div className="loginPage">
            <div className="form-segment">
                <div className="graphic">
                    <img src={TwoBlackMen} alt="meeting graphic" />
                </div>
                <div className="form">
                    <form onSubmit={handleLogin}>
                    <h1>Welcome back!</h1>

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
                        <div className='end-text'>
                            <p className='advice'>Must be at least 8 characters</p>
                            <Link to='/forget-password'><p className='forget-password'>Forgot Password?</p></Link>
                        </div>
                        <button type='submit'>Sign Up</button>
                        <p className='existing-account'>Don't have an account? <Link to='/register'><span>Register</span></Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default LoginPage