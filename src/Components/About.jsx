import React from 'react'
import './About.css'
import logo from '../assets/Me.png'
const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            <hr className='hr'/>
            </div>
            <div className='about-section'>
                <div className="about-left">
                    <img src={logo} className='about-img' />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a front-end–focused MERN stack developer who builds clean, responsive, and user-friendly web interfaces.</p>
                        <p>I turn ideas into fast, scalable React applications with modern UI/UX and performance in mind.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML</p> <hr style={{ width: "50%" }} />  </div>
                        <div className="about-skill"><p>Css</p><hr style={{ width: "67%" }} />  </div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "80%" }} />  </div>
                        <div className="about-skill"><p>React</p><hr style={{ width: "60%" }} />  </div>
                        <div className="about-skill"><p>WordPress</p><hr style={{ width: "90%" }} />  </div>

                    </div>
                    <div className="achivments">
                        <div className="achivment">
                            <h1>10+</h1>
                            <p>Year of Experience</p>
                        </div>
                        <hr />
                        <div className="achivment">
                            <h1>50+</h1>
                            <p>Project Completed</p>
                        </div>
                        <hr />
                        <div className="achivment">
                            <h1>15+</h1>
                            <p>Happy Clients</p>
                        </div>
                    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About