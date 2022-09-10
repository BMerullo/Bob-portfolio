import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";

const Projects = (props) => {
  const { projectList } = props;

  return (
    <Layout>
      <main className="content-body">
        <section className="projects-background banner">
          <div className="top-banner-title">
            <h1 className="page-title">Projects</h1>
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
