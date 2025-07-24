import { useState } from "react";
import "./App.css";
import About from "./About";
import Header from "../src/header/Header";
import Skills from "./assets/Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
