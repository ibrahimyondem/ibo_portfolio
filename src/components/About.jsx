import React from "react";
import { Container } from "react-bootstrap";
import "../styles/About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <Container>
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate software developer and data science enthusiast with expertise 
              in full-stack development and machine learning. I specialize in building 
              scalable web applications using modern technologies like React, ASP.NET Core, 
              and Node.js, while also applying data-driven insights through Python and ML frameworks.
            </p>
            <p>
              With experience in both enterprise applications and data analysis projects, 
              I bring a unique perspective that combines software engineering best practices 
              with analytical thinking. I'm comfortable working across the entire stack, 
              from database design to cloud deployment on Azure and AWS.
            </p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <h4>Full-Stack Developer</h4>
              <p>Building end-to-end web solutions</p>
            </div>
            <div className="highlight-item">
              <h4>Data Enthusiast</h4>
              <p>ML models & data-driven insights</p>
            </div>
            <div className="highlight-item">
              <h4>Cloud Ready</h4>
              <p>Azure & AWS deployment experience</p>
            </div>
            <div className="highlight-item">
              <h4>Continuous Learner</h4>
              <p>Always exploring new technologies</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
