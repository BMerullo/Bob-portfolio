import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import ProjectFormComponent from "../components/ProjectFormComponent";
import axios from "axios";

const WebForm = () => {
  const navigate = useNavigate();

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
    <div>
      <Layout>
        <div className="content-body">
          <div className="projects-background banner">
            <div className="top-banner-title-admin">
              <h1 className="page-title">new website</h1>
              <div>
                <button className="admin-btn" onClick={() => navigateTo()}>
                  admin
                </button>
                <button className="admin-btn" onClick={logout}>
                  logout
                </button>
              </div>
            </div>
          </div>
          <ProjectFormComponent />
        </div>
      </Layout>
    </div>
  );
};

export default WebForm;
