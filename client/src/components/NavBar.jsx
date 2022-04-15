import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <nav className="navbar">
      <ul className="list header-list">
        <li className="connect-container header-list-item">
          <div className="dropdown">
            <div
              className="dropdown-btn"
              onMouseEnter={(e) => setIsActive(!isActive)}
            >
              connect
            </div>
            {isActive && (
              <div
                className="dropdown-content"
                onMouseLeave={(e) => setIsActive(!isActive)}
              >
                <div className="dropdown-item">linkedin</div>
                <div className="dropdown-item">github</div>
                <div className="dropdown-item">bmerullo85@gmail.com</div>
              </div>
            )}
          </div>
        </li>
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
        {/* <li className="header-list-item">
          <Link className="nav-link" id="header-link" to="/web">
            web
          </Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default NavBar
