// Import external libraries
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Import styles and images
import './App.css'

// import pages and componenets
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {

  return (
    <>
      <Router>
        <div className="view-container">
          <div className="main-view">
            <Navbar />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/login' element={<LoginPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
