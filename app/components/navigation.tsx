"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { RouteContext } from "../RouteContext";
import { FaLinkedin, FaGithub, FaEnvelope, FaReceipt, FaAngleDown } from "react-icons/fa";

const Navigation = () => {
  const { setCurrentRoute } = useContext(RouteContext);
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
          <button className="nav-link" onClick={() => setCurrentRoute("/")}>
            Home
          </button>
          <div className="dropdown">
            <button className="dropbtn">Projects</button>
            <div className="dropdown-content">
              <button
                className="nav-link"
                onClick={() => setCurrentRoute("/pages/cm_project")}
              >
                Classic Mafia Game
              </button>
              <button
                className="nav-link"
                onClick={() => setCurrentRoute("/pages/viu_project")}
              >
                VIU Culinary App
              </button>
              <button
                className="nav-link"
                onClick={() => setCurrentRoute("/pages/wc_project")}
              >
                WhichCam Web WordPress
              </button>
            </div>
          </div>
          <button
            className="nav-link"
            onClick={() => setCurrentRoute("/pages/contact")}
          >
            Contact Me
          </button>
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
      <div className="scroll-down flex flex-col text-4xl items-center">
      <p className="mb-3 text-3xl">Scroll Down</p>
      <div className="animate-bounce">
        <FaAngleDown />
      </div>
    </div>
    </div>
  );
};

export default Navigation;
