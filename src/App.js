import React from "react";

import "./App.css";
import About from "./components/About";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import TopButton from "./components/TopButton";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <TopButton />
    </div>
  );
}

export default App;
