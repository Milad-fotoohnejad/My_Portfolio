import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
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
        <div className="copyright text-center">
          &copy; {new Date().getFullYear()} Milad Fotoohnejad. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
