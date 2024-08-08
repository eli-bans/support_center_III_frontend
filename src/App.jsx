// Import external libraries
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';

// Import providers
import { UserProvider } from './contexts/UserContext';

// Import styles and images
import './App.css'

// import pages and componenets
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import FindTutorPage from './pages/FindTutorPage';
import TutorDashboard from './pages/tutor/TutorDashboard';

function App() {

  return (
    <>
      <UserProvider>
        <Router>
          <div className="view-container">
            <div className="main-view">
              <Navbar />
              <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/forget-password' element={<ForgetPasswordPage />} />
                <Route path='/find-tutor' element={<FindTutorPage />} />

                {/* Protected Routes */}
                <Route path='/tutor-dashboard' element={
                  <PrivateRoute role="tutor">
                    <TutorDashboard />
                  </PrivateRoute>}
                />

              </Routes>
            </div>
          </div>
        </Router>
      </UserProvider>
    </>
  )
}

export default App
