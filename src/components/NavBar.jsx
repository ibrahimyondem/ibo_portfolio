import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "../styles/Navbar.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`navbar ${navColour ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          IY.
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link href="#home" onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#about" onClick={() => updateExpanded(false)}>
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#skills" onClick={() => updateExpanded(false)}>
                Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#projects" onClick={() => updateExpanded(false)}>
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#contact" onClick={() => updateExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="/resumes/Ibrahim_Yondem_Resume.pdf"
                target="_blank"
                className="fork-btn-inner"
              >
                Resume
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;