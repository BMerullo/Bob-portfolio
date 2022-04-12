import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logos/logo.png'

const Header = (props) => {
  // const { title } = props

  return (
    <header>
      <h1 className="title">
        <img className="bob-logo" src={logo} alt="bob logo" />
      </h1>
      <ul className="list header-list">
        <li className="header-list-item">
          <Link className="nav-link" id="header-link" to="/aboutme">
            about
          </Link>
        </li>
        <li className="header-list-item">
          <Link className="nav-link" id="header-link" to="/projects">
            projects
          </Link>
        </li>
        <li className="header-list-item">
          <Link className="nav-link" id="header-link" to="/web">
            web
          </Link>
        </li>
        {/* <li className="header-list-item">
          <span className="nav-link" id="header-link">
            |
          </span>
        </li> */}
        <li>
          <p className="nav-link" id="header-link">
            connect
          </p>
        </li>
      </ul>
    </header>
  )
}

export default Header
