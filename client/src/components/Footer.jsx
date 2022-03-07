

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
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Resume</li>
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