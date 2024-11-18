import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Certificate.css';

const Certificate = () => {
  const sections = [
    { name: 'Udemy', color: '#4CAF50', hour: 34, link: "https://www.udemy.com" },
    { name: 'JP Morgan', color: '#9C27B0', hour: 49, link: "https://www.jpmorgan.com" },
    { name: 'IBM', color: '#FF5722', hour: 49, link: "https://www.ibm.com" },
    { name: 'Google', color: '#6256CA', hour: 10, link: "https://www.google.com" },
  ];

  return (
    <div className="know-container">
      <header className="know-header">
        {/* <h1 className="know-logo">My Certificates</h1> */}
      </header>

      <main className="know-main">
        <h2 className="know-title">All Certificates and Internships</h2>
        
        <p className="know-description">
          I have completed professional certifications from Udemy, Coursera, Microsoft, and LinkedIn Learning, focusing on software development, cloud computing, and data analysis. Additionally, I interned at IBM, where I worked on projects involving cloud technologies and AI, and at JPMorgan, where I contributed to financial technology initiatives. These experiences have strengthened my technical skills and prepared me for real-world challenges in both tech and finance sectors.
        </p>

        <div className="know-buttons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <button className="know-btn primary">
              <FaLinkedin /> LinkedIn
            </button>
          </a>
        </div>

        <h3 className="know-section-title">All Certifications</h3>

        <div className="know-sections">
          {sections.map((section) => (
            <div key={section.name} className="know-section-card" style={{ backgroundColor: section.color }}>
              <h4>{section.name}</h4>
              <div className="CerImgDiv">
                
              </div>
              <div className="know-section-footer">
                <span>{section.hour} hour</span>
                <Link to={section.link} target="_blank" rel="noopener noreferrer">
                  <button className="know-arrow-btn">→</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="know-footer">
        {/* <p>© 2024 My Certificates</p> */}
      </footer>
    </div>
  );
};

export default Certificate;
