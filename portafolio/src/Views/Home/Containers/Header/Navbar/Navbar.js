import React from "react";
import "./Navbar.css";
import { useGeneralContext } from "../../../../../Context/GenearlContext";
import { Outlet, Link } from "react-router-dom";
const Nabvar = () => {
  const datos = useGeneralContext();
  let dataNavbar = datos.headerData.Navbar;

  return (
    <nav className="nav">
      <img
        src={`http://localhost:1337${dataNavbar.Icono.data.attributes.url}`}
        alt="logo"
        className="logo"
      />
      <ul className="menu_nav">
        {dataNavbar.menu.map((item) => {
          if (item.route) {
            return (
              <li className="menu_nav_item" key={item.Titulo}>
                <Link to={item.route}>{item.Titulo}</Link>
              </li>
            );
          } else {
            return (
              <li className="menu_nav_item" key={item.Titulo}>
                <a href={`#seccion_${item.Titulo.toLowerCase()}`}>
                  {item.Titulo}
                </a>
              </li>
            );
          }
        })}
      </ul>

      <Outlet />
    </nav>
  );
};

export default Nabvar;
