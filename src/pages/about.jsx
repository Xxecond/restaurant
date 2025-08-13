import  React from 'react';

const About = () => {
  return (
    <div id="about">
    <section id="about-box">
      <h1 className="about-heading">We are honoured to serve you.</h1>
      <div className="about-section">
        <h2 className="about-subtitle">Working Hours</h2>
        <p className="about-text">Open Daily: <strong>8:00 AM – 10:00 PM</strong></p>
      </div>
      <div className="about-section">
        <h2 className="about-subtitle">Why Choose Us</h2>
        <ul className="about-list">
          <li>✔ Quick and Reliable Delivery</li>
          <li>✔ Friendly & Prompt Customer Service</li>
          <li>✔ Call Anytime to Place an Order</li>
        </ul>
      </div>
      <div className="about-section">
        <h2 className="about-subtitle">Connect with Us</h2>
        <div className="about-icon-box">
         <a href="https://wa.me/233531467213" target="_blank" rel="noopener noreferrer" ><i className="fab fa-whatsapp"></i></a>
          <a href="mailto:andrewsampadu9@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
          <a href="https://x.com/maners_999shit" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
          <a href="https://www.facebook.com/Xecond.Xhooter" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
        </div> 
      </div>
      <a href="#home-box" className="about-btn" >Home</a>
    </section>
    </div>
  );
};

export default About;