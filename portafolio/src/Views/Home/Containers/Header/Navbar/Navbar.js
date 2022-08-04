import React from "react";
import "./Navbar.css";
import { useGeneralContext } from "../../../../../Context/GenearlContext";

const Nabvar = () => {
  const datos = useGeneralContext();
  let dataNavbar = datos.headerData.Navbar;

  return (
    <nav className="nav">
      <img
        src={`http://localhost:1337${dataNavbar[0].Icono.data.attributes.url}`}
        alt="logo"
        className="logo"
      />
      <ul className="menu_nav">
        {dataNavbar[0].menu.map((item) => (
          <li className="menu_nav_item" key={item.Titulo}>
            <a href={`#seccion_${item.Titulo.toLowerCase()}`}>{item.Titulo}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nabvar;
