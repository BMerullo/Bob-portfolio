import './App.css'
import { Routes, Route } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import LandingPage from './pages/LandingPage'
import Web from './pages/Web'
import Projects from './pages/Projects'
import Dropdown from './components/Dropdown'

function App() {
  const title = 'Bob Merullo'

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutme" element={<AboutMe title={title} />} />
        <Route path="/web" element={<Web title={title} />} />
        <Route path="/projects" element={<Projects title={title} />} />
        <Route path="/test" element={<Dropdown />} />
      </Routes>
    </div>
  )
}

export default App
