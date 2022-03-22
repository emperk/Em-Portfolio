import React from "react";
import {
  Routes, Route
} from "react-router-dom";

// components
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/experience" element={ <Experience /> }/>
        <Route path="/projects" element={ <Projects /> }/>
        <Route path="/skills" element={ <Skills /> }/>
      </Routes>
    </div>
  )
}
