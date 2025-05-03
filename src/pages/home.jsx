import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id='home-box'>
      <div className='home-content'>
        <h1 className='home-heading'>Maners<br />Fast<br /> Food</h1>
        <div className='home-abb'>
          <span className='letter'>M</span>
          <span className='letter'>F</span>
          <span className='letter'>F</span>
          </div>
      </div>

      <h6 className='home-txt'>
        Call to Place Your Order
        <br />
        <span className='small-txt'>Explore our delicious menu</span>
      </h6>

      <Link to="/menu" className="home-btn">Menu</Link>

      <div className='home-divider'>
        <i className='fas fa-location-dot'></i>
        <i className='fas fa-envelope'></i>
        <i className='fas fa-phone'></i>
      </div>
    </div>
  );
};

export default Home;
