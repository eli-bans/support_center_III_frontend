// Import external libraries
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import RedirectOnLoad from './routes/RedirectOnLoad';
import RouteTracker from './routes/RoutesTracker';

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
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {

  return (
    <>
      <UserProvider>
        <Router>
          <AppContent />
        </Router>
      </UserProvider>
    </>
  )
}

function AppContent(){
  const location = useLocation();
  
  return(
    <div className="view-container">
      <RedirectOnLoad />  {/* RedirectOnLoad here */}
      <RouteTracker />    {/* RouteTracker here */}
      <div className="main-view">
        {/* <Navbar /> */}
        {location.pathname !== '/admin-dashboard' && <Navbar />}
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

          <Route path='/admin-dashboard' element={
            <PrivateRoute role="admin">
              <AdminDashboard />
            </PrivateRoute>}
          />

        </Routes>
      </div>
    </div>
  )
}

export default App
