"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaLinkedin, FaGithub, FaEnvelope, FaReceipt } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="navigation">
      <div>
        <a href="/">
          <Image
            src="/logo-green2.png"
            alt="LOGO"
            width={150}
            height={150}
            className="profile-img"
          />
        </a>
      </div>
      <nav>
        <div className="nav font-mono">
          <Link href="/">
            <button className="nav-link">Home</button>
          </Link>
          <div className="dropdown">
            <button className="dropbtn">Projects</button>
            <div className="dropdown-content">
              <Link href="/pages/cm_project">
                <button className="nav-link">Classic Mafia Game</button>
              </Link>
              <Link href="/pages/viu_project">
                <button className="nav-link">VIU Culinary App</button>
              </Link>
              <Link href="/pages/wc_project">
                <button className="nav-link">WhichCam Web WordPress</button>
              </Link>
            </div>
          </div>
          <Link href="/pages/contact/">
            <button className="nav-link">Contact Me</button>
          </Link>
        </div>
      </nav>
      <div>
        <footer className="footer">
          <div className="footer-content">
            <a
              title="LinkedIn"
              href="https://linkedin.com/in/milad-fotoohnejad/"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <FaLinkedin />
            </a>
            <a
              title="GitHub"
              href="https://github.com/Milad-fotoohnejad"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <FaGithub />
            </a>
            <a
              title="Email"
              href="mailto:milad.fotoohnejad@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <FaEnvelope />
            </a>
            <a
              title="Resume"
              href="https://drive.google.com/file/d/1jRzwSHt3A7NgTtB2D0iVkPMYbZBVeboC/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <FaReceipt />
            </a>
            <div className="copyright text-center">
              &copy; {new Date().getFullYear()} <br></br> Milad Fotoohnejad
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Navigation;
