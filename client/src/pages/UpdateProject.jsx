import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import ProjectFormComponent from "../components/ProjectFormComponent";
import axios from "axios";

const ProjectForm = (props) => {
  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const imageChange = (e) => {
    setProject({ ...project, image: e.target.files[0] });
    console.log(project.image);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", project.image);
    formData.append("title", project.title);
    formData.append("description", project.description);

    console.log(project.image);

    axios
      .post("http://localhost:8000/api/projects", formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setProject({
          title: "",
          description: "",
          image: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/users/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("userId");
        navigate("/admn-login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigateTo = () => {
    console.log("project button");
    navigate(`/admn-portal/${localStorage.userId}`);
  };

  return (
    <Layout>
      <main className="content-body">
        <section className="projects-background banner">
          <div className="top-banner-title-admin">
            <h1 className="page-title">Update Project</h1>
            <div>
              <button className="admin-btn" onClick={() => navigateTo()}>
                admin
              </button>
              <button className="admin-btn" onClick={logout}>
                logout
              </button>
            </div>
          </div>
        </section>
        <section className="flex">
          <article>
            <ProjectFormComponent
              submitHandler={submitHandler}
              handleChange={handleChange}
              project={project}
              // image={image}
              imageChange={imageChange}
              // selectedFile={selectedFile}
            />
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default ProjectForm;
