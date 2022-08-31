import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import LandingPage from "./pages/LandingPage";
import Web from "./pages/Web";
import Projects from "./pages/Projects";
import Dropdown from "./components/Dropdown";
import React, { useState } from "react";
import AdminLogin from "./pages/AdminLogin";
// import ProjectForm from "./pages/AdminPortal";
import AdminPortal from "./pages/AdminPortal";
import ProjectForm from "./pages/ProjectForm";
import WebForm from "./pages/WebForm";

function App() {
  const title = "bob merullo";

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutme" element={<AboutMe title={title} />} />
        <Route path="/web" element={<Web title={title} />} />
        <Route path="/projects" element={<Projects title={title} />} />
        <Route path="/admn-login" element={<AdminLogin title={title} />} />
        <Route
          path="/admn-portal/:id"
          element={<AdminPortal title={title} />}
        />
        <Route
          path="/project-form/:id"
          element={<ProjectForm title={title} />}
        />
        <Route path="/web-form/:id" element={<WebForm title={title} />} />
      </Routes>
    </div>
  );
}

export default App;
