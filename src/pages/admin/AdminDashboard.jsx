// import react libraries
import React, {useState} from 'react';

// import styles
import StatsBox from '../../components/admin_components/StatsBox';
import '../../styles/AdminDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddTutorModal from '../../components/admin_components/AddTutorModal';

const users = [
    {"firstname":null, "lastname": null, "email": "palalasare@gmail", "class":2025, "role":"student"},
    {"firstname":"Palal", "lastname": "Asare", "email": "palalasare@gmail", "class":2025, "role":"tutor"}
]

function AdminDashboard () {

    const [isOnDashboard, setIsOnDasbhard] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // handel tab switch 
    const handleTabSwitch = () => {
        setIsOnDasbhard(!isOnDashboard);
    }

    // Toggle add tutor modal
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

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
                <div className="logout">
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
                        <UsersAvailable handleToggle={toggleModal}/>
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

function UsersAvailable ({handleToggle}) {


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
                                <p>{user.class}</p>
                                <p>{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
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