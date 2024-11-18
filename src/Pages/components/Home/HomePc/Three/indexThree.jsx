import React from 'react';
import ThreeHead from './ThreeHead';
import IndexCard from './indexCard'; // Assuming correct import path for IndexCard
import  './Three.css'

const classNameSP = [
  { classNamePP: 'OneLineBox', ProjectName: "Restaurant Web App with MERN and Firebase", },
  { classNamePP: 'TwoLineBox', ProjectName: "A Dynamic Movie Watchlist with MERN, IMDb Integration, and Firebase", },
  { classNamePP: 'ThreeLineBox', ProjectName: "restaurant web app by Mern stack", },
  { classNamePP: 'FourLineBox', ProjectName: "restaurant web app by Mern stack", }
];

const IndexThree = () => {
  return (
    <div className="PageThree">
      <ThreeHead />
      <div className="MainPart ">
        {classNameSP.map((item, index) => (
          <IndexCard key={index} classNameSP={item} />
        ))}
      </div>
    </div>
  );
}

export default IndexThree;
