import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/images.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menu, setMenu] = useState('Home');
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleScroll = (id) => {
    setMenu(id);
    setMobileMenu(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className='logo' />

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-menu ${mobileMenu ? 'active' : ''}`}>
        {['Home','AboutMe','Services','Portfolio','ContactUs'].map(item => (
          <li key={item} onClick={() => handleScroll(item)}>
            <p>{item === 'AboutMe' ? 'About Me' : item === 'ContactUs' ? 'Contact Us' : item}</p>
            {menu === item && <hr className='line2' />}
          </li>
        ))}
      </ul>

      <div className="connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
