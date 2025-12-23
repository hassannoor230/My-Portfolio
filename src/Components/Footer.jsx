import React from 'react'
import logo from '../assets/images.png'
import { FaUser } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      {/* Footer Top */}
      <div className="footer-top">
        <div className="top-left">
          <img src={logo} alt="Logo" />
          <p>I am a frontend developer from USA with 10 years of experience in companies like Microsoft, Tesla and Apple.</p>
        </div>

        <div className="top-right">
          <div className='email'>
            <FaUser />
            <input type="email" placeholder='Enter Your Email' />
          </div>

          <div className="subscribe">
            Subscribe
          </div>
        </div>
      </div>

      <hr />

      {/* Footer Bottom */}
      <div className="bottom">
        <div className="footer-left">
          © 2025 RHN. All rights reserved.
        </div>
        <div className="footer-right">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
