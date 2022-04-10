import React from 'react'
import lifting from '../images/lifting.jpeg'

const PhysicalModal = (props) => {
  const { closePhysical } = props
  return (
    <div className="modal-background">
      <div className="modal-container">
        <button className="close-btn" onClick={() => closePhysical(false)}>
          X
        </button>

        <div className="modal-title">
          <h1>Physical Attributes</h1>
        </div>
        <div className="modal-body">
          <p>- Able to left large reems of paper</p>
          <p>- Physically conditioned to sit for long hours</p>
          <p>- Exquisite medi carpals </p>
        </div>
        <div className="modal-footer">
          <img className="modal-img" src={lifting} alt="A computer" />
        </div>
      </div>
    </div>
  )
}

export default PhysicalModal
