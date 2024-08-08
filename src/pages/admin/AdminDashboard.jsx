// import styles
import StatsBox from '../../components/admin_components/StatsBox';
import '../../styles/AdminDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AdminDashboard () {

    return (
        <div className="admin-dashboard">
            <div className="sidepane">
                <h1>SupportCenter</h1>
                <div className='sidetabs'>
                    <div className="tabs">
                        <FontAwesomeIcon icon="fa-solid fa-layer-group" />
                        <p>Dashboard</p>
                    </div>
                    <div className="tabs">
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
                        <h1>Dashboard</h1>
                        <p>Welcome to the admin dashboard. Here, you can view stats and add tutors</p>
                    </div>
                    <div className="details">
                        <h1>User Statistics</h1>
                        <div className="stats">
                            <StatsBox statName={"Total Users"} statNumber={376}/>
                            <StatsBox statName={"Total Users"} statNumber={376}/>
                            <StatsBox statName={"Total Users"} statNumber={376}/>
                            <StatsBox statName={"Total Users"} statNumber={376}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard