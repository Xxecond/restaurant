import React from 'react';
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

      <a href="#menu" className="home-btn">Menu</a>

      <div className='home-divider'>
  <div><i className='fas fa-location-dot'></i> Mallam, Accra</div>
  <div><i className='fas fa-envelope'></i> andrewsampadu9@gmail.com</div>
  <div><i className='fas fa-phone'></i> 0531467213</div>
</div>

    </div>
  );
};

export default Home;
