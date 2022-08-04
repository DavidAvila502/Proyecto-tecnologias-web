import React from "react";
import "./destrezas.css";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import DestrezaCard from "../../../../../Components/DestrezaCard/DestrezaCard";
import Check from "../../../../../Components/Chek/Check";
import { useGeneralContext } from "../../../../../Context/GenearlContext";

const Destrezas = () => {
  const datos = useGeneralContext();
  let destrezasData = datos.mainData.Destrezas;

  return (
    <section className="destrezas" id="seccion_destrezas">
      <SectionTitle
        title={destrezasData.titulo}
        color="#fff"
        css_class="mt_25 mb_50"
      />
      <div className="destrezas_container">
        <ul className="list_destrezas">
          {destrezasData.Card.map((item, index) => {
            if (item.id !== 1) {
              return (
                <span key={index} style={{ display: "flex" }}>
                  <li className="check_container" key={index}>
                    <Check
                      image={`http://localhost:1337${destrezasData.arrow_icon.data.attributes.url}`}
                    />
                  </li>
                  <li
                    className="list_detrezas_item mr_end_item"
                    key={item.titulo}
                  >
                    <DestrezaCard
                      destreza_name={item.titulo}
                      destreza_image={`http://localhost:1337${item.icono.data[0].attributes.url}`}
                    />
                  </li>
                </span>
              );
            } else {
              return (
                <li
                  className="list_detrezas_item mr_end_item"
                  key={item.titulo}
                >
                  <DestrezaCard
                    destreza_name={item.titulo}
                    destreza_image={`http://localhost:1337${item.icono.data[0].attributes.url}`}
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
};

export default Destrezas;
