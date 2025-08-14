"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RouteContext } from "../RouteContext";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaReceipt,
  FaAngleDown,
} from "react-icons/fa";

const Navigation = () => {
  const { currentRoute, setCurrentRoute } = useContext(RouteContext);

  const isActive = (routes: string | string[]) => {
    if (Array.isArray(routes)) {
      return routes.includes(currentRoute);
    }
    return routes === currentRoute;
  };

  const isProjectActive = [
    "/pages/projects",
    "/pages/cm_project",
    "/pages/wed_project",
    "/pages/viu_project",
    "/pages/wc_project",
  ].includes(currentRoute);

  return (
    <div className="navigation">
      <div className="logo-wrapper">
        <a href="/">
          <Image
            src="/LOGO_M.png"
            alt="LOGO"
            width={200}
            height={200}
            className="profile-img"
          />
        </a>
      </div>
      <nav>
        <div className="nav font-mono">
          <button
            className={`nav-link ${isActive("/") ? "active" : ""}`}
            onClick={() => setCurrentRoute("/")}
          >
            Home
          </button>
          <div className="dropdown">
            <button
              className={`dropbtn ${isProjectActive ? "active" : ""}`}
              onClick={() => setCurrentRoute("/pages/projects")} 
            >
              Projects
            </button>

            {/* <div className="dropdown-content">
              <button
                className="nav-link"
                onClick={() => {
                  setCurrentRoute("/pages/cm_project");
                }}
              >
                Classic Mafia Game
              </button>

              <button
                className="nav-link"
                onClick={() => {
                  setCurrentRoute("/pages/wed_project");
                }}
              >
                Wedding Website
              </button>

              <button
                className="nav-link"
                onClick={() => {
                  setCurrentRoute("/pages/viu_project");
                }}
              >
                VIU Culinary App
              </button>
              <button
                className="nav-link"
                onClick={() => {
                  setCurrentRoute("/pages/wc_project");
                }}
              >
                WhichCam Web
              </button>
            </div> */}
          </div>
          <button
            className={`nav-link ${isActive("/pages/contact") ? "active" : ""}`}
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
              href="https://drive.google.com/file/d/1gK0Can0jS57nZApFrAh9Ou2-PKyDPdHP/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <FaReceipt />
            </a>
            <div className="copyright text-center">
              &copy; {new Date().getFullYear()} <br></br> Milad Fotoohnejad
            </div>
            <br />
            <div className="legal">
              <button
                className={`nav-link ${
                  isActive("/pages/legal") ? "active" : ""
                }`}
                onClick={() => setCurrentRoute("/pages/legal")}
              >
                Legal
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Navigation;
