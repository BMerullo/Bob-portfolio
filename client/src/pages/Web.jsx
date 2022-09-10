import React from "react";
import Layout from "../components/Layout";

const Web = (props) => {
  const { webList } = props;
  return (
    <Layout>
      <main className="content-body">
        <section className="projects-background banner">
          <div className="top-banner-title">
            <h1 className="page-title">Freelance</h1>
            {/* <h5 className="eyebrow">Fr</h5> */}
          </div>
        </section>
        <section>
          <article>
            {webList.map((web, index) => (
              <div key={web._id}>
                <h3>{web.title}</h3>
                <img src={`../uploads/${web.image}`} alt="test" />
                <h4>{web.description}</h4>
              </div>
            ))}
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default Web;
