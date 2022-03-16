import { Link } from 'react-router-dom';
import linkedinImg from '../images/logos/linkedin-img.png'
import githubImg from '../images/logos/github-img.png'


const Footer = (props) => {

    const { title, phone, email } = props

    return (
        <footer>
            <div>
                <h1 className="title">{title}</h1>
                    <p>{phone}</p>
                    <p>{email}</p>
            </div>
            <div>
                <ul className="list footer-list">
                <label className="list-label">Explore</label>
                    <li><Link className="nav-link" id="footer-link" to="/aboutme">About Me</Link></li>
                    <li><Link className="nav-link" id="footer-link" to="/skills">Skills</Link></li>
                    <li><Link className="nav-link" id="footer-link" to="/projects">Projects</Link></li>
                    <li><Link className="nav-link" id="footer-link" to="/resume">Resume</Link></li>
                </ul>
            </div>
            <div className="contact-link-container">
                <ul className="list footer-list">
                <label className="list-label">Connect</label>
                <div className="footer-link-flex">
                    <li ><a className="nav-link" id="footer-link" href="https://www.linkedin.com/in/bobmerullo/">LinkedIn <img className="footer-img" src={linkedinImg} alt="linkedin logo" /></a></li>
                    {/* <img className="footer-img" src={linkedinImg} alt="linkedin logo" /> */}
                </div>
                <div className="footer-link-flex">
                    <li ><a className="nav-link footer-link-flex" id="footer-link" href="https://github.com/BMerullo">GitHub <img className="footer-img" src={githubImg} alt="github logo" /></a></li>
                    {/* <img className="footer-img" src={githubImg} alt="github logo" /> */}
                </div>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;