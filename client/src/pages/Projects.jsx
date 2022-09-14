import React from "react";
import Layout from "../components/Layout";

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
            <div className="form-flex">
              <article key={index} className="flex-form">
                <a className="nav-link" id="header-link" href={project.url}>
                  <img
                    className="project-img"
                    src={`../uploads/${project.image}`}
                    alt="test"
                  />
                </a>
              </article>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Projects;
