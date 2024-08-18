// External packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';

// Import contexts
import { UserContext } from '../contexts/UserContext';
import { StudentContext } from '../contexts/StudentContext';
import { TutorContext } from '../contexts/TutorContext';
import { AdminContext } from '../contexts/AdminContext';

// styling and image imports
import '../styles/LoginPage.css';
import Footer from '../components/Footer';
import TwoBlackMen from '../assets/two-black-men.png';

function LoginPage () {
    const { loginStudent } = useContext(StudentContext);
    const { loginTutor } = useContext(TutorContext);
    const { loginAdmin } = useContext(AdminContext);

    // user states
    const { user, setUser } = useContext(UserContext);
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

            let loggedInUser = loginStudent(email, password) || loginTutor(email, password) || loginAdmin(email, password);

            if (loggedInUser) {
                // Update the role assignment logic to explicitly handle the admin case
                let userRole;
                if (loggedInUser.is_student) {
                    userRole = 'student';
                } else if (loggedInUser.is_tutor) {
                    userRole = 'tutor';
                } else {
                    userRole = 'admin';  // Explicitly set the role to admin if neither student nor tutor
                }

                // Set user context
                setUser({
                    id: loggedInUser.id,
                    email: loggedInUser.email,
                    role: userRole,  // Use the userRole variable
                    profile_picture: loggedInUser.profile_picture,
                });

                // Reset email and password
                setEmail('');
                setPassword('');

                // Set the password visibility
                setShowPassword(false);

                // Navigate based on the role
                switch (userRole) {
                    case 'student':
                    case 'tutor':
                        navigate('/');
                        break;
                    case 'admin':
                        navigate('/admin-dashboard');
                        break;
                    default:
                        console.error('Unexpected role:', userRole);
                        alert('Unexpected role. Please contact support.');
                }
            } else {
                alert('Invalid email or password. Please try again.');
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
                        <button type='submit'>Sign In</button>
                        <p className='existing-account'>Don't have an account? <Link to='/register'><span>Register</span></Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default LoginPage