import React from 'react';
import './MobileProjectPage.css';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const MobileProjectPage = ({ title, imageUrl, projectUrl, sourceCodeUrl }) => {
  return (
    <div>
      <div className="MobileBoxMain">
        <div 
          className="MainProject" 
          style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <p className="MTitleP">{title}</p>
        </div>

        <div className="MobileProjectbutton">
          <button className="MButtonPOne">
            <a href={projectUrl} className="MButtonLinkP" target="_blank" rel="noopener noreferrer">
              <FaArrowUpRightFromSquare />
              Visit Project
            </a>
          </button>
          <button className="MButtonPTwo">
            <a href={sourceCodeUrl} className="MButtonLinkP" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare />
              Source Code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileProjectPage;
