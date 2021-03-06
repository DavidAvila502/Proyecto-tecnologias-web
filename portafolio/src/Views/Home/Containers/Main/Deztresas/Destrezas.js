import React from "react";
import "./destrezas.css";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import DestrezaCard from "../../../../../Components/DestrezaCard/DestrezaCard";
import Check from "../../../../../Components/Chek/Check";

const Destrezas = () => {
  return (
    <section className="destrezas">
      <SectionTitle title="Destrezas" color="#fff" css_class="mt_25 mb_50" />
      <div className="destrezas_container">
        <ul className="list_destrezas">
          <li className="list_detrezas_item">
            <DestrezaCard
              destreza_name="Diseño responsivo"
              destreza_image="assets/images/devices.svg"
            />
          </li>

          <li className="check_container">
            <Check />
          </li>

          <li className="list_detrezas_item">
            <DestrezaCard
              destreza_name="Experiecnia de usuario"
              destreza_image="assets/images/smile.svg"
            />
          </li>

          <li className="check_container">
            <Check />
          </li>
          <li className="list_detrezas_item">
            <DestrezaCard
              destreza_name="Posicionamiento"
              destreza_image="assets/images/seo.svg"
            />
          </li>

          <li className="check_container">
            <Check />
          </li>

          <li className="list_detrezas_item mr_end_item">
            <DestrezaCard
              destreza_name="Diseño de interfaz"
              destreza_image="assets/images/desing.svg"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Destrezas;
