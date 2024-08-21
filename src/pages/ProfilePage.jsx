import Footer from '../components/Footer';
import '../styles/ProfilePage.css';

function ProfilePage() {

    return (
        <>
            <div className="profile">
                <div className="container">
                    <h1>Hello, Alvin</h1>
                    <p>Kindly edit and setup your profile however you see fit.</p>
                    <div className="account-info">
                        <h2>Account Info</h2>
                        <div className='details'>
                            Others
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProfilePage