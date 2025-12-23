import React from 'react';
import Navbar from './Components/Navbar';
import Me from './Components/Me';
import About from './Components/About';
import Services from './Components/Services';
import Mywork from './Components/Mywork';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      
      {/* Add IDs for scrolling */}
      <div id="Home">
        <Me />
      </div>

      <div id="AboutMe">
        <About />
      </div>

      <div id="Services">
        <Services />
      </div>

      <div id="Portfolio">
        <Mywork />
      </div>

      <div id="ContactUs">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default App;
