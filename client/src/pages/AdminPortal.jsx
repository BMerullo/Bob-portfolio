import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import axios from "axios";

const AdminPortal = (props) => {
  const { title } = props;
  const navigate = useNavigate();
  const btnLink = [
    `/project-form/${localStorage.userId}`,
    `/web-form/${localStorage.userId}`,
  ];

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

  const navigateTo = (btn) => {
    console.log("project button");
    navigate(btn);
  };
  return (
    <Layout>
      <div className="content-body">
        <div className="about-background banner">
          <div className="top-banner-title-admin">
            <h1 className="page-title">admin portal</h1>
            <div>
              <button
                className="admin-btn"
                onClick={() => navigateTo(btnLink[0])}
              >
                new project
              </button>
              <button
                className="admin-btn"
                onClick={() => navigateTo(btnLink[1])}
              >
                new web
              </button>
              <button className="admin-btn" onClick={logout}>
                logout
              </button>
            </div>
          </div>
          <div className="form-flex"></div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPortal;
