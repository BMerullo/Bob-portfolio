import React from "react";
import Layout from "../components/Layout";

const Admin = (props) => {
  const { title } = props;
  return (
    <Layout>
      <div className="content-body">
        <div className="about-background banner">
          <div className="top-banner-title">
            <h1 className="page-title">Login</h1>
          </div>
          <div className="form-flex">
            <form action="">
              <label>username</label>
              <div>
                <input
                  className="input"
                  type="text"
                  name="title"
                  placeholder="username"
                />
              </div>
              <label>password</label>
              <div>
                <input
                  className="input"
                  type="password"
                  name="title"
                  placeholder="password"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="form-flex">
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
        <div className="content"></div>
      </div>
    </Layout>
  );
};

export default Admin;
