import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Smart Inventory Management System",
      description: "A full-stack web application focused on secure inventory management with user authentication, role-based access control, error handling, and real-time interactivity.",
      technologies: ["C#", "ASP.NET Core", "PostgreSQL", "Docker", "Azure"],
      icon: "🛒",
      github: "https://github.com/ibrahimyondem",
      demo: null
    },
    {
      title: "Employee Management System",
      description: "A backend-focused employee management system with authentication, CRUD operations, and RESTful APIs tested using Postman and deployed via Docker.",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "Docker", "REST APIs"],
      icon: "👥",
      github: "https://github.com/ibrahimyondem/EmployeeManagement-Backend",
      demo: null
    },
    {
      title: "QuietSpace Mobile App",
      description: "A mobile application designed to help students across the GTA discover quiet and productive study locations using map-based search and community-driven reviews.",
      technologies: ["React Native", "Firebase", "MongoDB", "Google Maps API"],
      icon: "📱",
      github: null,
      demo: null,
      inProgress: true
    },
    {
      title: "COVID-19 Prediction Analysis",
      description: "A data science project analyzing COVID-19 datasets to train and evaluate machine learning models for outcome prediction and feature importance analysis.",
      technologies: ["Python", "Pandas", "scikit-learn", "Jupyter"],
      icon: "📊",
      github: "https://github.com/ibrahimyondem",
      demo: null
    },
    {
      title: "ToDoHolic",
      description: "ToDoHolic is a task management iOS application designed to help users organize daily activities in a simple and visually appealing way.",
      technologies: ["Swift", "UIkit", "CoreData", "Xcode"],
      image: "/todoholic_icon.png",
      github: "https://github.com/ibrahimyondem/ToDoHolic"
    },

    {
      title: "Simple Calculator - Desktop Application",
      description: "A desktop calculator application built using C#, WinForms, and Visual Studio, providing basic arithmetic operations with a user-friendly interface.",
      technologies: ["C#", "WinForms", "Visual Studio"],
      icon: "🖥️", 
      github: "https://github.com/ibrahimyondem/Simple-Calculator",
    },

    {
      title: "Will You Be My Valentine?",
      description: "A small fun and viral project to share with your valentine.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: "❤️",
      github: "https://github.com/ibrahimyondem/will-you-be-my-valentine",
      demo: "https://ibrahimyondem.github.io/will-you-be-my-valentine/"
    }

  ];

  return (
    <section className="projects-section" id="projects">
      <Container>
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <span role="img" aria-label={project.title}>{project.icon}</span>
                )}
              </div>
              
              <div className="project-content">
                <h3>
                  {project.title}
                  {project.inProgress && <span style={{ fontSize: '0.875rem', color: 'var(--primary-color)', marginLeft: '0.5rem' }}>(In Progress)</span>}
                </h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.github ? (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link secondary"
                    >
                      GitHub
                    </a>
                  ) : (
                    <span className="project-link disabled">Private Repo</span>
                  )}
                  
                  {project.demo ? (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link primary"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="project-link disabled">
                      {project.inProgress ? "Coming Soon" : "No Demo"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
