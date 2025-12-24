import React from 'react'
import './Mywork.css'
import WorkData from '../assets/WorkData.js'
import { FaArrowRight } from 'react-icons/fa'

const Mywork = () => {
  return (
    <div className="mywork" id="Portfolio">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <hr className="hr2" />
      </div>

      <div className="container">
        {WorkData.map(work => (
          <div key={WorkData.id} className="work-card">
            <img
              src={WorkData.image}
              alt={WorkData.title}
              className="work-img"
            />
            <h3>{WorkData.title}</h3>
            <p>{WorkData.description}</p>
          </div>
        ))}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <FaArrowRight />
      </div>
    </div>
  )
}

export default Mywork
