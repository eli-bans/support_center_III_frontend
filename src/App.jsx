import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'

function App() {

  return (
    <>
      <div className="view-container">
        <div className="main-view">
          <Navbar />
          <Homepage />
        </div>
      </div>
    </>
  )
}

export default App
