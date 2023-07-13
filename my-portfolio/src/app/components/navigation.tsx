import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaReadme, FaRProject, FaReceipt } from "react-icons/fa";

const Navigation = () => {
  return (
    <>
      <Image
        src="/profile2.jpeg" 
        alt="Profile Picture"
        width={150} 
        height={150} 
        className="profile-img" // optional, for round images
      />
      <div className="nav font-mono">
        <Link href="/">
          <button className="nav-link">Home</button>
        </Link>
        <div className="dropdown">
          <button className="dropbtn">Projects</button>
          <div className="dropdown-content">
            <Link href="/cm_project">
              <button className="nav-link">Classic Mafia Game</button>
            </Link>
            <Link href="/project2">
              <button className="nav-link">VIU Culinary App</button>
            </Link>
            <Link href="/project3">
              <button className="nav-link">WhichCam Web WordPress</button>
            </Link>
          </div>
        </div>
        <Link href="/contact">
          <button className="nav-link">Contact Me</button>
        </Link>
      </div>
      <div>
        <footer className="footer">
          <div className="footer-content">
            <a
              href="https://linkedin.com/in/milad-fotoohnejad/"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Milad-fotoohnejad"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:milad.fotoohnejad@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <FaEnvelope />
            </a>
              <a
                href="https://drive.google.com/file/d/1jRzwSHt3A7NgTtB2D0iVkPMYbZBVeboC/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <FaReceipt />
              </a>
            <div className="copyright">
              &copy; {new Date().getFullYear()} Milad Fotoohnejad.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Navigation;
