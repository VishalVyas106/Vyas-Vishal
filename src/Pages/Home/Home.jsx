import React from 'react';
import './Home.css';
import HomePc from '../components/Home/HomePc/HomePc';
import HomeMobileIndex from '../components/Home/HomeMobile/HomeMobileIndex';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-pc">
        <HomePc />
      </div>
      <div className="home-mobile">
        <HomeMobileIndex />
      </div>
    </div>
  );
};

export default Home;
