import React from 'react'
import logo from '../assets/Me.png'
import './Me.css'

const Me = () => {
  return (
    <div className='Me' id="Home">
      <img src={logo} alt="Hassan Noor" className='me-logo' />

      <h2>
        I’m <em><span>Hassan Noor</span></em> a MERN Stack Developer skilled in building fast
      </h2>

      <h3>
        Scalable web applications using MongoDB, Express, React, and Node.js.
      </h3>

      <h3>
        I turn ideas into clean, responsive, and high-performance full-stack solutions.
      </h3>

      <div className="me-action">
        <div className="me-connect">Connect With Me</div>
        <div className="me-cv">Download CV</div>
      </div>
    </div>
  )
}

export default Me
