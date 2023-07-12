import React from 'react';
import NavLink from 'next/link';


const Navigation = () => {
    return (
      <div className="nav font-mono">
        <NavLink href="/">
          <button className="nav-link">Home</button>
        </NavLink>
        <div className="dropdown">
          <button className="dropbtn">Projects</button>
          <div className="dropdown-content">
            <NavLink href="/project1">
              <button className="nav-link">Classic Mafia Game</button>
            </NavLink>
            <NavLink href="/project2">
              <button className="nav-link">VIU Culinary App</button>
            </NavLink>
            <NavLink href="/project3">
              <button className="nav-link">WhichCam Web WordPress</button>
            </NavLink>
          </div>
        </div>
        <NavLink href="/contact">
          <button className="nav-link">Contact Me</button>
        </NavLink>
      </div>
    );
  };
  
  export default Navigation;
