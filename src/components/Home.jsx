import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar2 from "../assets/avatar2.jpg";
import avatar1 from "../assets/avatar.jpg";
import Type from "./Type";
import "../styles/Home.css";

function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [showSecretAvatar, setShowSecretAvatar] = useState(false);

  const handleAvatarClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 5) {
      setShowSecretAvatar(!showSecretAvatar);
      setClickCount(0);
    }
  };

  const currentAvatar = showSecretAvatar ? avatar1 : avatar2;

  return (
    <section className="home-section" id="home">
      <Container>
        <Row className="align-items-center">
          <Col md={7} className="home-header">
            <h1 className="greeting">
              Hi There! <span className="wave" role="img" aria-label="wave">👋</span>
            </h1>

            <h1 className="heading-name">
              I'm <strong className="main-name">Ibrahim Yondem</strong>
            </h1>

            <div className="typewriter-text">
              <Type />
            </div>

            <div className="home-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </Col>

          <Col md={5} className="home-image-col">
            <div className="profile-image-container">
              <span className="tech-icon" role="img" aria-label="code">💻</span>
              <span className="tech-icon" role="img" aria-label="rocket">🚀</span>
              <span className="tech-icon" role="img" aria-label="bulb">💡</span>
              <span className="tech-icon" role="img" aria-label="star">⭐</span>
              
              <img
                src={currentAvatar}
                alt="Ibrahim Yondem"
                className="profile-image"
                onClick={handleAvatarClick}
                title="You found me! Click 5 times..."
              />
            </div>
          </Col>
        </Row>

        <div className="scroll-indicator">
          <a href="#about">Scroll</a>
          <div>↓</div>
        </div>
      </Container>
    </section>
  );
}

export default Home;
