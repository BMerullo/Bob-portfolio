import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {

    const {title} = props

    return(       
            <header>
                <h1 className="title">{title}</h1>
                <ul className="list header-list">
                    <li className="header-list-item"><Link className="nav-link" id="header-link" to="/aboutme">About</Link></li>
                    <li className="header-list-item"><Link className="nav-link" id="header-link" to="/skills">Skills</Link></li>
                    <li className="header-list-item"><Link className="nav-link" id="header-link" to="/projects">Projects</Link></li>
                    {/* <li className="header-list-item"><Link className="nav-link" id="header-link" to="/resume">Resume</Link></li> */}
                </ul>
            </header>       
    )
} 

export default Header;