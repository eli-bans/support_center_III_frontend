// import react libraries
import React, {useState, useContext, useEffect} from 'react';
import { UserContext } from '../../contexts/UserContext';
import {useNavigate} from 'react-router-dom';

// import styles
import StatsBox from '../../components/admin_components/StatsBox';
import '../../styles/AdminDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddTutorModal from '../../components/admin_components/AddTutorModal';

// const users = [
//     {"firstname":null, "lastname": null, "email": "palalasare@gmail", "class":2025, "role":"student"},
//     {"firstname":"Palal", "lastname": "Asare", "email": "palalasare@gmail", "class":2025, "role":"tutor"}
// ]

function AdminDashboard () {
    
    const [users, setUsers] = useState([]);
    const [isOnDashboard, setIsOnDasbhard] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    // Fetch users on component build
    useEffect(() => {
        fetchUsers();
    }, []);

    //Handle fetch of all users
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/users/');
            if (response.status === 200) {
                const data = await response.json();
                setUsers(data);
                console.log('Users fetched successfully!');
            } else {
                console.log(`Error fetching users: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.log(`Error fetching users: ${error.message}`);
        }
    };

    // handle tab switch 
    const handleTabSwitch = () => {
        setIsOnDasbhard(!isOnDashboard);
    }

    // Toggle add tutor modal
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // handle logout
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('lastPath');
        navigate('/');
    }

    return (
        <div className="admin-dashboard">
            <div className="sidepane">
                <h1>SupportCenter</h1>
                <div className='sidetabs' onClick={handleTabSwitch}>
                    <div className="tabs">
                        <FontAwesomeIcon icon="fa-solid fa-layer-group" />
                        <p>Dashboard</p>
                    </div>
                    <div className="tabs" onClick={handleTabSwitch}>
                        <FontAwesomeIcon icon="fa-regular fa-user" />
                        <p>Users</p>
                    </div>
                </div>
                <div className="logout" onClick={handleLogout}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
                    <p>Logout</p>
                </div>
            </div>
            <div className="others">
                <div className="dashboard-data">
                    <div className="heading">
                        <h1>{isOnDashboard ? "Dashboard" : "Users"}</h1>
                        <p>Welcome to the admin dashboard. Here, you can view stats and add tutors</p>
                    </div>

                    {isOnDashboard ? (
                        <DashboardStats />
                    ): (
                        <UsersAvailable handleToggle={toggleModal} users={users}/>
                    )
                    }
                    
                </div>
            </div>
            <AddTutorModal 
                show={isModalOpen}
                onClose={toggleModal}
                students={users}
            />
        </div>
    )
}

function UsersAvailable ({handleToggle, users}) {


    return (
        <div className='details'>
            <div className="btn-row">
                <div className="add-btn" onClick={handleToggle}>
                    <FontAwesomeIcon icon="fa-solid fa-plus" />
                    <p>Add Tutor</p>
                </div>
            </div>
            <div className="users-container">
                <h2 className='container-title'>Users</h2>
                <div className="container-table">
                    <div className='container-table-header'>
                        <p>NAME</p>
                        <p>EMAIL</p>
                        <p>CLASS</p>
                        <p>ROLE</p>
                    </div>
                    <div className="container-content">
                        {users.map((user, index) => (
                            <div className="container-row" key={index}>
                                <p>{user.firstname ? user.firstname : "no-name"} {user.lastname ? user.lastname : ""}</p>
                                <p>{user.email}</p>
                                <p>{user.class ? user.class : "N/A"}</p>
                                <p>{user.is_tutor ? 'Tutor' : user.is_student ? 'Student' : 'Admin'}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

function DashboardStats () {
    return(
        <div className="details">
            <h1>User Statistics</h1>
            <div className="stats">
                <StatsBox statName={"Total Users"} statNumber={376}/>
                <StatsBox statName={"Total Users"} statNumber={376}/>
                <StatsBox statName={"Total Users"} statNumber={376}/>
                <StatsBox statName={"Total Users"} statNumber={376}/>
            </div>
        </div>
    )
}

export default AdminDashboard