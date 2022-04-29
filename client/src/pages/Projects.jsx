import React from 'react'
import Layout from '../components/Layout'

const Projects = (props) => {
  return (
    <Layout>
      <div className="content-body">
        <div className="projects-background banner">
          <div className="top-banner-title">
            <h1 className="page-title">Projects</h1>
            <h5 className="eyebrow">A collection of my work</h5>
          </div>
          <div className="project-container">
            <div className="project-card">
              <div className="project-img-container" id="starwars"></div>
              <h3 style={cardStyle}>Starwars API</h3>
              <a
                className="project-link"
                href="https://github.com/BMerullo/star-wars-api"
                style={cardStyle}
              >
                source code
              </a>
            </div>
            <div className="project-card">
              <div className="project-img-container"></div>
              <h3 style={cardStyle}>Project title</h3>
              <a href="#" style={cardStyle}>
                source code
              </a>
            </div>
            <div className="project-card">
              <div className="project-img-container"></div>
              <h3 style={cardStyle}>Project title</h3>
              <a href="#" style={cardStyle}>
                source code
              </a>
            </div>
            <div className="project-card">
              <div className="project-img-container"></div>
              <h3 style={cardStyle}>Project title</h3>
              <a href="#" style={cardStyle}>
                source code
              </a>
            </div>
            <div className="project-card">
              <div className="project-img-container"></div>
              <h3 style={cardStyle}>Project title</h3>
              <a href="#" style={cardStyle}>
                source code
              </a>
            </div>
            <div className="project-card">
              <div className="project-img-container"></div>
              <h3 style={cardStyle}>Project title</h3>
              <a href="#" style={cardStyle}>
                source code
              </a>
            </div>
            <div className="project-card">
              <div className="project-img-container"></div>
              <h3 style={cardStyle}>Project title</h3>
              <a href="#" style={cardStyle}>
                source code
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects

const cardStyle = {
  padding: '15px',
}
