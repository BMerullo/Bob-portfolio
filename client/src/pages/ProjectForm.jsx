import React from "react";
import Layout from "../components/Layout";

const ProjectForm = (props) => {
  const { title } = props;
  return (
    <Layout>
      <div className="content-body">
        <div className="about-background banner">
          <div className="top-banner-title">
            <h1 className="page-title">New Project</h1>
          </div>
          <div className="form-flex">
            <form action="">
              <label>title</label>
              <div>
                <input
                  className="input"
                  type="text"
                  name="title"
                  placeholder="username"
                />
              </div>
              <label>description</label>
              <div>
                <textarea className="text-box" type="textarea" name="title" />
              </div>
              <label>add image</label>
              <div>
                <input className="input" type="file" name="image" />
              </div>
            </form>
          </div>
        </div>
        <div className="form-flex">
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectForm;
