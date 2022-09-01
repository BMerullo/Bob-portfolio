import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";

const Projects = (props) => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/projects/`)
      .then((res) => {
        console.log(res.data);
        setProjectList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <main className="content-body">
        <section className="projects-background banner">
          <div className="top-banner-title">
            <h1 className="page-title">projects</h1>
            <h5 className="eyebrow">a collection of my work</h5>
          </div>
        </section>
        <section>
          {projectList.map((project, index) => (
            <div key={index} className="flex-form">
              <h3>{project.title}</h3>
              <img src={`../uploads/${project.image}`} alt="test" />
              <h4>{project.description}</h4>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Projects;
