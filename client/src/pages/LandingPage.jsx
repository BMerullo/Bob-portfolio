import React from 'react'

const LandingPage = () => {
  return (
    <div style={styleSheet}>
      <h1>this is a style test</h1>
      <p style={pStyle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, totam
        esse distinctio corporis asperiores vel repellat molestias ducimus vitae
        recusandae velit accusamus in ab quam facilis ipsa? In, saepe dolores?
      </p>
    </div>
  )
}

export default LandingPage

const styleSheet = {
  background: 'blue',
  color: 'white',
  pading: '50px',
}

const pStyle = {
  color: 'red',
}
