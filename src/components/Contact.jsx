import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Contact.css";

function Contact() {
  const email = ['ibrahim', 'yondem', 'dev', '@', 'gmail', '.', 'com'].join('');
  
  return (
    <>
      <section className="contact-section" id="contact">
        <Container>
          <h2 className="section-title">
            Get In <span>Touch</span>
          </h2>
          
          <div className="contact-content">
            <p>
              I'm currently looking for new opportunities and would love to hear from you.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <p className="location-info">
              📍 Toronto, Canada
            </p>
            
            <div className="social-links">
              <a 
                href="https://github.com/ibrahimyondem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <span>💻</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ibrahimyondem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <span>💼</span>
              </a>
              <a 
                href={`mailto:${email}`}
                className="social-link"
                aria-label="Email"
              >
                <span>✉️</span>
              </a>
            </div>
            
            <a href={`mailto:${email}`} className="contact-email">
              Email Me
            </a>
          </div>
        </Container>
      </section>
      
      <footer className="footer">
        <Container>
          <p>©2026 built by Ibrahim Yondem • Toronto, Canada</p>
        </Container>
      </footer>
    </>
  );
}

export default Contact;
