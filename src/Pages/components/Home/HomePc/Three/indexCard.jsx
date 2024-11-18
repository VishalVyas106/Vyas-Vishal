// IndexCard.js
import React, { useEffect } from 'react';
import { OpAnimation } from './GSAP'; // Import the animation function

const IndexCard = ({ classNameSP }) => {
  useEffect(() => {
    OpAnimation(); // Trigger the animation when the component mounts
  }, []);

  return (
    <div className={`boxCard OpAnimetion ${classNameSP.classNamePP}`}>
      <div className="ProjectName">{classNameSP.ProjectName}</div>
      <button className="ProjLink">
        Link
      </button>
      {/* Uncomment and add additional elements if needed */}
      {/* <ProjectBox /> */}
      {/* <div id="follower"></div> */}
    </div>
  );
};

export default IndexCard;
