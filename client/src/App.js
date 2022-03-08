import './App.css';
import Footer from './components/Footer';
// import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import AboutMe from './components/AboutMe';


function App() {
  const title = "Bob Merullo"
  const phone = "(303)867-5309"
  const email = "bmerullo85@gmail.com"

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AboutMe title={title} />} />
      </Routes>
      <Footer
        title={title}
        phone={phone}
        email={email} />
    </div>
  );
}

export default App;
