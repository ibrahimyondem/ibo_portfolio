import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

// Prevent sag-click 
function App() {
  useEffect(() => {
    const handleContextMenu = (e) =>{
      e.preventDefault();
    };
    
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [])

  //Prevent 

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;