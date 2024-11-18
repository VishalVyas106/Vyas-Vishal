import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="NavOne">
      <div className="Name">Vishal</div>
      <div className="Links">
        <NavLink to='Hire Me'>
          <button>
            <a href="#" className="btn2"><span className="spn2">Hire Me</span></a>
          </button>
        </NavLink>
        <NavLink to='Project'>
          <button>
            <a href="#" className="btn2"><span className="spn2">Project</span></a>
          </button>
        </NavLink>
        <NavLink to='Certificet'>
          <button>
            <a href="#" className="btn2"><span className="spn2">Certificet</span></a>
          </button>
        </NavLink>
      </div>
    </div>

    <div className="NavTwo">
      <div className="button" data-tooltip="Size: 20Mb">
        <div className="button-wrapper">
          <div className="text">Download CV</div>
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
