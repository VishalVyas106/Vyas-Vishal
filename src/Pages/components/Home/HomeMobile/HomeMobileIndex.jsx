import React, { useState } from 'react'; 
import { IoMdMenu } from 'react-icons/io'; 
import { NavLink } from 'react-router-dom'; 
import './HomeMobile.css'; 
import HomeMobileHero from './HomeMobileHero';

const HomeMobileIndex = () => { 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const toggleSidebar = () => { 
    setIsSidebarOpen(prevState => !prevState); 
  }; 

  return ( 
    <>
    <div className="MNavBar"> 
      <div className="Mlogo">
        Vyas 
        Vishal</div> 
      <div className="MMenuIcon" onClick={toggleSidebar}> 
        <IoMdMenu /> 
      </div> 
      <div className={`MMenu ${isSidebarOpen ? 'open' : ''}`}>
        <NavLink to="/" className="MMenuItem" onClick={toggleSidebar}>Home</NavLink> 
        <NavLink to="/project" className="MMenuItem" onClick={toggleSidebar}>Project</NavLink> 
        <NavLink to="/contact" className="MMenuItem" onClick={toggleSidebar}>Contact</NavLink> 
      </div>
    </div> 

      <HomeMobileHero />  

    </>
  ); 
}; 

export default HomeMobileIndex; 
