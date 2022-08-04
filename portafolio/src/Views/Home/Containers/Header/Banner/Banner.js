import React from "react";
import { useGeneralContext } from "../../../../../Context/GenearlContext";
import "./Banner.css";

const Banner = () => {
  const { headerData } = useGeneralContext();
  const bannerData = headerData.Banner;

  let titulo = bannerData.Titulo.split(" ");
  let elseTitulo = titulo.slice(2, titulo.length).join(" ");

  return (
    <section className="banner" id="seccion_inicio">
      <article className="banner_info_container">
        <div className="info_content">
          <div>
            <h1 className="titulo">
              <span className="gris">{titulo[0]} </span>
              <span className="verde">{titulo[1]}</span> <br />
              <span className="gris">{elseTitulo}</span>
              <a className="boton_dev" href="#seccion_inicio">
                {bannerData.Boton_titulo}
              </a>
            </h1>

            <p className="dev_descripcion">{bannerData.Subtitulo}</p>

            <div className="banner_botones">
              {bannerData.Boton.map((item, index) => (
                <a className={item.clase} href={item.href} key={index}>
                  {item.Titulo}
                </a>
              ))}
              <img
                src={`http://localhost:1337${bannerData.Icono_contacto.data[0].attributes.url}`}
                className="mensaje_icono"
                alt="contacto"
              ></img>
            </div>
          </div>
        </div>
      </article>
      <article className="banner_imagen_container">
        <img
          className="banner_foto"
          src={`http://localhost:1337${bannerData.Imagen_banner.data.attributes.url}`}
          alt="developer"
        ></img>
      </article>
    </section>
  );
};

export default Banner;
