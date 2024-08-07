// Non-styling imports
import { Link } from 'react-router-dom';

// Import styles, icons, and images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/ForgetPasswordPage.css';
import Footer from '../components/Footer';

function ForgetPasswordPage () {

    return (
        <>
        <div className="forget">
            <form onSubmit="">
                <h1>Forgot Password</h1>
                <p>Enter the email address or mobile phone number associated with your SupportCenter account</p>
                <p>An email with further instructions will be sent</p>
                <div className="input-field">
                    <label htmlFor='email'>Email</label>
                    <div className="input-entry">
                        <FontAwesomeIcon className='lead-icons' icon="fa-solid fa-envelope"/>
                        <input type='email' id='email' placeholder='abcd@gmail.com' />
                    </div>
                </div>
                <button type='submit'>Send Email</button>
                <div className="extra-text">
                    <p>Already have an account? <Link to='/login'><span>Log in</span></Link></p>
                    <p>Don't have an account? <Link to='/register'><span>Register</span></Link></p>
                </div>
            </form>
        </div>
        <Footer />
        </>
    )

}

export default ForgetPasswordPage