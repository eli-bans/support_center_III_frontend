import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/Footer';

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
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
