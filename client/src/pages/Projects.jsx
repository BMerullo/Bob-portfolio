import React from "react";
import Layout from "../components/Layout";

const Projects = (props) => {
  return (
    <Layout>
      <div className="content-body">
        <div className="projects-background banner">
          <div className="top-banner-title">
            <h1 className="page-title">projects</h1>
            <h5 className="eyebrow">a collection of my work</h5>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

const cardStyle = {
  padding: "15px",
};
