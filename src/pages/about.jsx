import React from 'react';

function About() {
  return (
    <div id='about-box'>
      <h1 className='about-heading'>We are honoured to serve you.</h1>

      <div className='about-section'>
        <h2 className='about-subtitle'>Working Hours</h2>
        <p className='about-text'>Open Daily: <strong>8:00 AM – 10:00 PM</strong></p>
      </div>

      <div className='about-section'>
        <h2 className='about-subtitle'>Why Choose Us</h2>
        <ul className='about-list'>
          <li>✔ Quick and Reliable Delivery</li>
          <li>✔ Friendly & Prompt Customer Service</li>
          <li>✔ Call Anytime to Place an Order</li>
        </ul>
      </div>

      <div className='about-section'>
        <h2 className='about-subtitle'>Connect with Us</h2>
        <div className='about-icon-box'>
          <i className='fab fa-whatsapp'></i>
          <i className='fas fa-envelope'></i>
          <i className='fab fa-x-twitter'></i>
          <i className='fab fa-facebook'></i>
        </div>
      </div>
    </div>
  );
}

export default About;
