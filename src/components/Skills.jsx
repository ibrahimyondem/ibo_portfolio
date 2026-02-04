import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "C#", "SQL", "Swift UI"]
    },
    {
      title: "Frontend",
      skills: ["React", "React Native", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      title: "Backend & Frameworks",
      skills: ["ASP.NET Core MVC", "Node.js", "Express.js", "JavaFX"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "Data Science & AI",
      skills: ["Pandas", "NumPy", "Matplotlib", "Jupyter Notebook", "scikit-learn"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git & GitHub", "Docker", "Jenkins", "AWS/Azure", "CI/CD"]
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures & Algorithms", "OOP", "MVC Architecture", "RESTful APIs", "Agile & SDLC"]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <Container>
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
