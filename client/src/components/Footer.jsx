import { Link } from 'react-router-dom';

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
            <div>
                <ul className="list footer-list">
                <label className="list-label">Connect</label>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;