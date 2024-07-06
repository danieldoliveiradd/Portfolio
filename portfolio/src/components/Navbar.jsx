import React from "react";
import "./Navbar.scss";
import logoDaniel from "../assets/icons/logo-daniel.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo-container">
          <img src={logoDaniel} alt="Logo com o nome Daniel Oliveira" />
        </div>
        <div className="navbar-links-container">
          <a href="#">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Portfólio</a>
          <a href="#" id="button-youtube">You<span className="logo-color-blue">Tube</span></a>
        </div>
        <div className="contact-button-container">
          <a href="#" className="button-contact">Contato</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
