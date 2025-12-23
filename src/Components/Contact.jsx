import React, { useState } from 'react';
import { FaLocationArrow, FaMailBulk, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // ❌ Empty validation
    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", "5d14f826-7c6f-4f0d-8837-28a3a4e57558");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Success!");
      alert("Email sent successfully");
      form.reset(); // clear form
    } else {
      setResult("Error");
      alert("Enter valid data");
    }
  };

  return (
    <div className='contact'>
      <div className="title">
        <h1>Get In Touch</h1>
        <hr className='line3' />
      </div>

      <div className="section">
        <div className="left">
          <h1>Let's Talk</h1>
          <p>
            Let’s turn your ideas into a powerful digital experience — I’m just a message away.
          </p>

          <div className="details">
            <div className="detail">
              <p><FaMailBulk /> hassannoor2309@gmail.com</p>
            </div>
            <div className="detail">
              <p><FaLocationArrow /> Street no#3 Saleempura Rahwali Gujranwala Punjab</p>
            </div>
            <div className="detail">
              <p><FaPhone /> 03268931323</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className='right'>
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
          />

          <label>Your E-mail</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
          />

          <label>Message</label>
          <textarea
            rows="8"
            placeholder="Enter Your Message"
            name="message"
          ></textarea>

          <button type='submit' className='Submit'>
            Submit Now
          </button>

          {result && <p className="form-status">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
