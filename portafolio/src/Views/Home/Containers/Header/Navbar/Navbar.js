import React from "react";

import "./Navbar.css";

const Nabvar = () => {
  return (
    <nav className="nav">
      <img src="assets/images/glasses.png" alt="logo" className="logo" />
      <ul className="menu_nav">
        <li className="menu_nav_item">Inicio</li>
        <li className="menu_nav_item">Destrezas</li>
        <li className="menu_nav_item">Tecnologias</li>
        <li className="menu_nav_item">Interes</li>
        <li className="menu_nav_item">Productividad</li>
        <li className="menu_nav_item">Contacto</li>
        <li className="menu_nav_item" style={{ marginRight: "20px" }}>
          Blog
        </li>
      </ul>
    </nav>
  );
};

export default Nabvar;
