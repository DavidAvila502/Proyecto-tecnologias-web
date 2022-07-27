import React from "react";

import "./Navbar.css";

const Nabvar = () => {
  return (
    <nav className="nav">
      <img src="assets/images/glasses.png" alt="logo" className="logo" />
      <ul className="menu_nav">
        <li className="menu_nav_item">
          <a href="#seccion_banner">Inicio</a>
        </li>
        <li className="menu_nav_item">
          <a href="#seccion_destrezas">Destrezas</a>
        </li>
        <li className="menu_nav_item">
          <a href="#seccion_tecnologias">Tecnologias</a>
        </li>
        <li className="menu_nav_item">
          <a href="#seccion_intereses">Interes</a>
        </li>
        <li className="menu_nav_item">
          <a href="#seccion_productividad">Productividad</a>
        </li>
        <li className="menu_nav_item">
          <a href="#seccion_contacto">Contacto</a>
        </li>
        <li className="menu_nav_item" style={{ marginRight: "20px" }}>
          Blog
        </li>
      </ul>
    </nav>
  );
};

export default Nabvar;
