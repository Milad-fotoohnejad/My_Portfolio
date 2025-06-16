"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { RouteContext } from "../RouteContext";
import Link from "next/link";

const MobileNav = () => {
  const { currentRoute, setCurrentRoute } = useContext(RouteContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (route: string) => {
    setCurrentRoute(route);
    setIsMenuOpen(false); // Ensures menu is closed after selection
  };

  return (
    <div className="mobile-nav">
      <div className="branding">
        <Link href="/" legacyBehavior>
          <a>
            <Image src="/LOGO_M.png" alt="Logo" width={60} height={60} />
          </a>
        </Link>
      </div>

      <button className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isMenuOpen && (
        <div className="menu open">
          <ul>
            <li onClick={() => handleNavClick("/")}>Home</li>
            <li onClick={toggleDropdown}>
              Projects
              {isDropdownOpen && (
                <ul>
                  <li onClick={() => handleNavClick("/pages/cm_project")}>
                    Classic Mafia Game
                  </li>
                  <li onClick={() => handleNavClick("/pages/viu_project")}>
                    VIU Culinary App
                  </li>
                  <li onClick={() => handleNavClick("/pages/wc_project")}>
                    WhichCam Web
                  </li>
                </ul>
              )}
            </li>
            <li onClick={() => handleNavClick("/pages/contact")}>Contact Me</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
