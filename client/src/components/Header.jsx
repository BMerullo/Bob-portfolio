import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {

    const {title} = props

    return(       
            <header>
                <h1 className="title">{title}</h1>
                <ul className="list header-list">
                    <li className="header-list-item"><Link className="nav-link" to="/aboutme">About Me</Link></li>
                    <li className="header-list-item"><Link className="nav-link" to="/skills">Skills</Link></li>
                    <li className="header-list-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                    <li className="header-list-item"><Link className="nav-link" to="/resume">Resume</Link></li>
                </ul>
            </header>       
    )
} 

export default Header;