import React from "react";

export default function Contact() {
  return (
    <div className="op-back">
      <div className="formContent">
        <h1>Contact Us</h1>
        <form id="contactForm">
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
          <h2>Find Us Here</h2>
          <p>Address: 123 Fake Street, Faketown, FK3 4AB</p>
          <p>Email: contact@faketown.com</p>
          <p>Phone: 0123456789</p>
        </div>
      </div>
    </div>
  );
}
