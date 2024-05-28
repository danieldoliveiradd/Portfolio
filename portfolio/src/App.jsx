import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import githubIcon from "./assets/icons/github.svg";
import "./App.scss";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <nav>
            <h1>
              Daniel Oliveira <br />
              <span>Full-stack Developer</span>
            </h1>
            <ul>
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Portfólio</a>
              </li>
              <li>
                <a href="#">
                  You<span id="logo-title">Tube</span>
                </a>
              </li>
            </ul>
            <li>
              <a href="#" id="button">
                Contato
              </a>
            </li>
          </nav>
        </header>
        <main>
          <section>
            <div className="content">
              <h1>Full-stack Developer</h1>
              <p id="skills">
                {"{"} JavaScript, React.js, Node.js, C#, .NET CORE, ASP.NET,
                MySQL {"}"}
              </p>
              <p>
                Olá! Eu sou Daniel , um Desenvolvedor Full-stack autodidata
                pronto para enfrentar desafios e resolver problemas com
                eficácia. Possuo uma sólida expertise em uma variedade de
                tecnologias, incluindo React.JS, TypeScript, Node.JS, C#, .NET
                Core, ASP.NET, MySQL, MongoDB e UI/UX.
              </p>
              <div className="buttons">
                <a
                  href="https://github.com/danieldoliveiradd"
                  target="_blank"
                  id="button-git"
                >
                  Explorar o GitHub <img src={githubIcon} alt="" />
                </a>
                <a href="https://danieldoliveiradd.github.io/" target="_blank">
                  Download CV
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
