import React from 'react'
import { Link } from 'react-router-dom'
import chuck from '../images/Charlie.jpg'

const LandingPage = () => {
  return (
    <div className="content">
      <h1>HELLO AND WELCOME TO BOB'S PORTFOLIO SITE</h1>
      <button>
        <Link to="/aboutme">Continue</Link>
      </button>
      <img className="bob-img" src={chuck} alt="charlie" />
    </div>
  )
}

export default LandingPage
