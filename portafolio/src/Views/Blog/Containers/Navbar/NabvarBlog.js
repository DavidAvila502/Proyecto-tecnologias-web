import React from "react";
import "./Navbar.css";

import { Outlet, Link } from "react-router-dom";
const NabvarBlog = () => {
  return (
    <nav className="nav">
      <img src="assets/images/glasses.png" alt="logo" className="logo" />
      <ul className="menu_nav">
        <li className="menu_nav_item">
          <Link to={"/"}>Inicio</Link>
        </li>
        <li className="menu_nav_item">
          <Link to={"/blog"}>Blog</Link>
        </li>
      </ul>

      <Outlet />
    </nav>
  );
};

export default NabvarBlog;
