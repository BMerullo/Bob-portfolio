import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import bob from '../images/bob.JPG'
import computer from '../images/computer.jpeg'
import desk from '../images/desk.jpeg'
import lifting from '../images/lifting.jpeg'

const AboutMe = (props) => {
  const { title } = props
  return (
    <Layout>
      <div className="content-body">
        <div className="about-background banner">
          <div className="top-banner-title">
            <h1 className="page-title">{title}</h1>
            <h5 className="eyebrow">Web Developer</h5>
          </div>
        </div>
        <div className="content">
          <img
            // className="carousel-cont"
            className="bob-img"
            src={bob}
            alt="bob"
          />
          <div className="about-content">
            <h6 className="eyebrow">What about Bob?</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <h6 className="eyebrow" id="experience">
          Experience
        </h6>
        <div className="content">
          <p className="skills-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="carousel-cont">
            <Carousel />
          </div>
        </div>
        <h6 className="eyebrow" id="experience">
          Click an Image to see what Bob brings to the table!
        </h6>
        <div className="flex-content">
          <div className="attribute">
            <img className="attribute-img" src={computer} alt="computer" />
          </div>
          <div className="attribute">
            <img className="attribute-img" src={desk} alt="desk" />
          </div>
          <div className="attribute">
            <img className="attribute-img" src={lifting} alt="getting ripped" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutMe
