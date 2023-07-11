import React from 'react';
import Link from 'next/link';


const Navigation = () => {
    return (
      <div className="nav">
        <Link href="/">
          <button className="nav-link">Home</button>
        </Link>
        <div className="dropdown">
          <button className="dropbtn">Projects</button>
          <div className="dropdown-content">
            <Link href="/project1">
              <button className="nav-link">Project 1</button>
            </Link>
            <Link href="/project2">
              <button className="nav-link">Project 2</button>
            </Link>
            <Link href="/project3">
              <button className="nav-link">Project 3</button>
            </Link>
          </div>
        </div>
        <Link href="/contact">
          <button className="nav-link">Contact</button>
        </Link>
      </div>
    );
  };
  
  export default Navigation;
