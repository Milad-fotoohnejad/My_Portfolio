"use client";
import React from "react";
import "../../globals.css";
import emailjs from 'emailjs-com';
import { FaLinkedin, FaGithub, FaEnvelope, FaReceipt } from "react-icons/fa";

export default function Contact() {

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_qg4tmcu', 'template_gp21tuf', e.target, 'UEHQ09GOPUXOOTQnZ')
      .then((result) => {
          console.log(result.text);
          alert('Message sent!');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
  };

  return (
    <div className="op-back content-bottom">
      <div className="formContent font-mono">
        <p className="title text-2xl text-green-400 mt-5">Please share you opinion with me</p>
        <form id="contactForm" onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} required></textarea>

          <button type="submit">Submit</button>
        </form>
        <div className="contactInfo">
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
            href="https://drive.google.com/file/d/1bayTjceyDt4OBAVxUXvripZxGySchuG_/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <FaReceipt />
          </a>
        </div>
      </div>
    </div>
  );
}
