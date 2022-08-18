import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import LandingPage from "./pages/LandingPage";
import Web from "./pages/Web";
import Projects from "./pages/Projects";
import Dropdown from "./components/Dropdown";
import React, { useState } from "react";
import Admin from "./pages/Admin";
import ProjectForm from "./pages/ProjectForm";

function App() {
  const title = "BOB MERULLO";

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutme" element={<AboutMe title={title} />} />
        <Route path="/web" element={<Web title={title} />} />
        <Route path="/projects" element={<Projects title={title} />} />
        <Route path="/test" element={<Dropdown />} />
        <Route path="/admin" element={<Admin title={title} />} />
        <Route path="/project-form" element={<ProjectForm title={title} />} />
      </Routes>
    </div>
  );
}

export default App;
