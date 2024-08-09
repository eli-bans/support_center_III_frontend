// import react libraries
import React, {useContext} from 'react';
import { UserContext } from '../contexts/UserContext';

//import styles
import '../styles/ProfileDropdown.css'
import {useNavigate} from 'react-router-dom';


function ProfileDropdown ({isOpen}) {
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handleDashboardRoute = () => {
        navigate('/tutor-dashboard');
    }

    // Handle user logout
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('lastPath');
        navigate('/');
    }

    if (!isOpen) return null;

    return (
        <div className="profile-container">
            {user.role === 'tutor' && (
                <p onClick={handleDashboardRoute} className='dashboard'>Dashboard</p>
            )}
            <p className='profile'>Profile</p>
            <p className='logout' onClick={handleLogout}>Logout</p>
        </div>
    )
}

export default ProfileDropdown