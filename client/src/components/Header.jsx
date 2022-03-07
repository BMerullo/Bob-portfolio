


const Header = (props) => {

    const {title} = props

    return(       
            <header>
                <h1 className="title">{title}</h1>
                <ul className="list header-list">
                    <li className="header-list-item">About Me</li>
                    <li className="header-list-item">Projects</li>
                    <li className="header-list-item">Skills</li>
                    <li className="header-list-item">Resume</li>
                </ul>
            </header>       
    )
} 

export default Header;