// import react libraries
import React, {useState, useContext} from 'react';
import { StudentContext } from '../../contexts/StudentContext';
import { TutorContext } from '../../contexts/TutorContext';
import { UserContext } from '../../contexts/UserContext';

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

    const { students } = useContext(StudentContext);
    const { tutors } = useContext(TutorContext);
    const { user, setUser } = useContext(UserContext);

    const [isOnDashboard, setIsOnDasbhard] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Combine students and tutors into one array
    const allUsers = [...students, ...tutors];

    // dashboard stats
    const totalUsers = allUsers.length;
    const totalStudents = students.length;
    const totalTutors = tutors.length;

    // handel tab switch 
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
                        <DashboardStats 
                            totalStudents={totalStudents}
                            totalTutors={totalTutors}
                            totalUsers={totalUsers}
                        />
                    ): (
                        <UsersAvailable handleToggle={toggleModal} users={allUsers}/>
                    )
                    }
                    
                </div>
            </div>
            <AddTutorModal 
                show={isModalOpen}
                onClose={toggleModal}
                studentUsers={students}
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
                        <p>EMAIL</p>
                        <p>CLASS</p>
                        <p>ROLE</p>
                    </div>
                    <div className="container-content">
                        {users.map((user, _) => (
                            <div className="container-row" key={user.id}>
                                <p>{user.email}</p>
                                <p>{user.class || "N/A"}</p>
                                <p>{user.is_tutor ? "Tutor" : "Student"}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

function DashboardStats ({totalUsers, totalStudents, totalTutors}) {
    return(
        <div className="details">
            <h1>User Statistics</h1>
            <div className="stats">
                <StatsBox statName={"Total Users"} statNumber={totalUsers}/>
                <StatsBox statName={"Total Students"} statNumber={totalStudents}/>
                <StatsBox statName={"Total Tutors"} statNumber={totalTutors}/>
                <StatsBox statName={"Total Tutors"} statNumber={totalTutors}/>
            </div>
        </div>
    )
}

export default AdminDashboard