import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer () {

    return (
        <footer>
            <div className="footer-content">
                <div className="foot-col">
                    <h3>Company</h3>
                    <ul>
                        <p>About us</p>
                        <p>Contact us</p>
                    </ul>
                </div>
                <div className="foot-col">
                <h3>Contact us</h3>
                    <ul>
                        <p>supportcenter@gmail.com</p>
                        <p>+233-456-7890</p>
                    </ul>
                </div>

            </div>
            <div className="footer-bottom">
                <p>© 2024 Copyright, All Rights Reserved. Made by the_support_center</p>
                <div className="social-icons">
                    <FontAwesomeIcon icon="fab fa-twitter" size='1x'/>
                    <FontAwesomeIcon icon="fab fa-facebook-f" />
                    <FontAwesomeIcon icon="fab fa-instagram" />
                    <FontAwesomeIcon icon="fab fa-linkedin-in" />
                </div>
            </div>
        </footer>
    )

}

export default Footer