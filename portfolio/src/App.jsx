import React from "react";
import AnimatedCursor from "react-animated-cursor";
import githubIcon from "./assets/icons/github.svg";
import minhaImagem from "./assets/img/eu.png";
import "./App.scss";

function App() {
  return (
    <>
      <div className="container">
        {/* <AnimatedCursor
          innerSize={12}
          outerSize={12}
          color="0, 174, 255" // Azul (RGB)
          outerAlpha={0.2} // Opacidade externa
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        /> */}
        <section id="inicio">
          <header>
            <nav>
              <h1>
                Daniel Oliveira <br />
                <span>Desenvolvedor Full-stack</span>
              </h1>
              <ul>
                <li>
                  <a href="#inicio">Início</a>
                </li>
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#projetos">Projetos</a>
                </li>
                <li>
                  <a href="#">
                    You<span id="logo-title">Tube</span>
                  </a>
                </li>
              </ul>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=61992740860&text=Ol%C3%A1%20tudo%20bem?%20Eu%20vim%20pelo%20seu%20portf%C3%B3lio.%20Me%20interessei%20e%20decidi%20entrar%20em%20contato&type=phone_number&app_absent=0"
                  target="_blank"
                  id="button"
                >
                  Contato
                </a>
              </li>
            </nav>
          </header>
          <main>
            <section className="intro">
              <div className="content">
                <h1>Desenvolvedor Full-stack</h1>
                <p id="skills">
                  {"{"} JavaScript, React.js, Node.js, C#, .NET CORE, ASP.NET,
                  MySQL {"}"}
                </p>
                <p>
                  Olá! Eu sou Daniel, um Desenvolvedor Full-stack autodidata
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
                  <a
                    href="https://danieldoliveiradd.github.io/"
                    target="_blank"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </section>
            <section id="sobre">
              <div className="content__sobre">
                <h2>
                  <span>Quem</span> sou eu?
                </h2>
                <p id="sub-title">
                  Full-stack Developer and{" "}
                  <span>Student Analysis and Systems Development</span>
                </p>
                <div className="box__infos">
                  <div className="text">
                    <p>
                      Olá! Eu sou Daniel, Desenvolvedor Full Stack autodidata,
                      cursando Análise de Sistemas na Uninter. Tenho expertise
                      em JavaScript, React, TypeScript, Node.js, MongoDB, C#,
                      .NET Core, ASP.NET e UI/UX. Contribui para várias
                      empresas, criando soluções inovadoras, incluindo um
                      projeto notável para o The Ontario Trails Council com
                      React e Next.js.
                    </p>
                    <p>
                      Gosto muito de matemática e física, e resolvo problemas
                      matemáticos com programação. Minhas habilidades incluem
                      HTML, CSS, JavaScript, React.js, Node.js, MySQL, SQL, C#,
                      .NET Core, ASP.NET e WordPress. Utilizo GitHub e testes
                      unitários para garantir a qualidade do código.
                    </p>
                  </div>
                  <div className="espacamento"></div>
                  <div className="image-container">
                    <img src={minhaImagem} alt="Eu" />
                  </div>
                </div>
                <div className="informacoes__tecnicas">  
                <div className="soft_skills">
                  <h2>Habilidades Comportamentais</h2>
                  <ul>
                  <li>Comunicação:</li>
                  <li>Comunicação:</li>
                  <li>Comunicação:</li>
                  <li>Comunicação:</li>
                  </ul>
                </div>

                <div className="hard__skills">
                  <h2>Habilidades Comportamentais</h2>
                  <ul>
                  <li>Comunicação:</li>
                  <li>Comunicação:</li>
                  <li>Comunicação:</li>
                  <li>Comunicação:</li>
                  </ul>
                </div>
                </div>
              </div>
            </section>
            <section id="projetos">
              <h2>Projetos</h2>
              <p>Aqui serão os projetos</p>
            </section>
          </main>
        </section>
      </div>
    </>
  );
}

export default App;
