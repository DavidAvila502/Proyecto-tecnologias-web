import React from "react";

import "./Banner.css";
import Banner_imagen from "../../../../../images/dev-image.svg";
import mensaje_icono from "../../../../../images/mensaje-icono.svg";

const Banner = () => {
  return (
    <section className="banner">
      <article className="banner_info_container">
        <div className="info_content">
          <div className="content">
            <h1 className="titulo">
              <span className="gris">HOLA </span>
              <span className="verde">MUNDO!</span> <br />
              <span className="gris"> Yo soy,</span>
              <a className="boton_dev">David Avila</a>
            </h1>

            <p className="dev_descripcion">
              Desarrollador de software con experiencia en <br />
              desarrollo movil y tecnologias web.
            </p>

            <div className="banner_botones">
              <a className="boton_blog">Blog</a>
              <a className="boton_contactame">Contactame</a>
              <img src={mensaje_icono} className="mensaje_icono"></img>
            </div>
          </div>
        </div>
      </article>
      <article className="banner_imagen_container">
        <img className="banner_foto" src={Banner_imagen}></img>
      </article>
    </section>
  );
};

export default Banner;
