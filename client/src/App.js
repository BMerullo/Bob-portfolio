import './App.css';
import Footer from './components/Footer';
// import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import AboutMe from './components/AboutMe';
import LandingPage from './components/LandingPage';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Carousel from './components/Carousel';


function App() {
  const title = "Bob Merullo"
  const email = "bmerullo85@gmail.com"

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/aboutme" element={<AboutMe title={title} />} />
        <Route path="/skills" element={<Skills title={title}/>}/>
        <Route path="/projects" element={<Projects title={title}/>}/>
        <Route path="/resume" element={<Resume title={title}/>}/>
        <Route path="/test1" element={<Carousel/>} />
        
      </Routes>
      <Footer
        title={title}
        email={email} />
    </div>
  );
}

export default App;
