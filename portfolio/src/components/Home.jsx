import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import { FaGithub } from "react-icons/fa";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="container-content">
        <h1>Full-stack Developer</h1>
        <span>
          {" { JavaScript, React.js, Node.js, C#, .NET CORE, ASP.NET, MySQL } "}
        </span>
        <p>
          Olá! Eu sou Daniel , um Desenvolvedor Full-stack autodidata pronto
          para enfrentar desafios e resolver problemas com eficácia. Possuo uma
          sólida expertise em uma variedade de tecnologias, incluindo React.JS,
          TypeScript, Node.JS, C#, .NET Core, ASP.NET, MySQL, MongoDB e UI/UX.
        </p>

        <div className="buttons-content">
          <button className="explore-github-button">
            Explorar GitHub <FaGithub size={24} />
          </button>
          <button id="cv">Download CV</button>
        </div>
      </div>
      <About />
      <Projects />
    </div>
  );
};

export default Home;
