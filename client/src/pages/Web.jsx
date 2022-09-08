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
                <h1>{web.title}</h1>
              </div>
            ))}
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default Web;
