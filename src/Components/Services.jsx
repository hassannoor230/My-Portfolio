import React from 'react'
import './Services.css'
import Servicesdata from '../assets/servicesdata.json'
import { FaArrowRight } from 'react-icons/fa'

const Services = () => {
  return (
    <div className='services' id="Services">
      <div className="service-title">
        <h1>My Services</h1>
        <hr className='line' />
      </div>

      <div className="services-container">
        {Servicesdata.services.map((service) => (
          <div key={service.id} className='services-format'>
            <h3>{service.id}</h3>
            <h2>{service.title}</h2>
            <p>{service.description}</p>

            <div className="readmore">
              <p>Read More</p>
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
