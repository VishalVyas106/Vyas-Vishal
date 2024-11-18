import React from 'react';
import { NavLink } from 'react-router-dom'; // Ensure React Router is used
import './MobileFooter.css';

const MobileFooter = () => {
  return (
    <div className="contact-page">
      <header>
        <h1>This is End</h1>
      </header>
      <div>
        <h2>Let’s Create Something Together</h2>
        <span className="talk-button">
          Let’s Talk <span className="arrow">↗</span>
        </span>

        <div className="footer-links">
          <div className="footer-links_Two">
            {/* {['Home', 'Work', 'About', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className="footer-link-Three"
              >
                {item}
              </NavLink>
            ))} */}
              </div>

            <div className="NextLinkFooter">


            {['GitHub', 'LinkedIn','Leetcode'].map((platform) => (
              <a
              key={platform}
              href={`https://${platform.toLowerCase()}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
              >
                {platform}
                <span className="arrowTwo">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-Mobile-text">
        <p className='footer-Mobile-text'> © 2024 Vyas Vishal | Full-Stack Developer | Crafting Digital Experiences</p>
        {/* <p className="made-in">MERN</p> */}
      </div>
    </div>
  );
};

export default MobileFooter;
