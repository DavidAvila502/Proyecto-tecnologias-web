import React from "react";
import "./Intereses.css";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import CardComponent from "../../../../../Components/CardComponent/CardComponent";

const Intereses = () => {
  return (
    <section className="intereses" id="seccion_intereses">
      <SectionTitle
        title="Interesado en aprender"
        color="#3F3D56"
        css_class="mt_25 mb_40"
      />
      <ul className="intereses_list">
        <li className="in_list_item">
          <CardComponent
            image="assets/images/ingles.svg"
            title="Ingles"
            card_style="interes_card"
            title_style="fw_700 open_sans semiblue mt_25 fz_20"
            image_style="interes_image"
          />
        </li>
        <li className="in_list_item">
          <CardComponent
            image="assets/images/illustracion.svg"
            title="Illustracion"
            card_style="interes_card"
            title_style="fw_700 open_sans semiblue mt_25 fz_20"
            image_style="interes_image"
          />
        </li>
        <li className="in_list_item">
          <CardComponent
            image="assets/images/mongo.svg"
            title="Mongo DB"
            card_style="interes_card"
            title_style="fw_700 open_sans semiblue mt_25 fz_20"
            image_style="interes_image"
          />
        </li>
        <li>
          <CardComponent
            image="assets/images/flutter.svg"
            title="Fulutter"
            card_style="interes_card"
            title_style="fw_700 open_sans semiblue mt_25 fz_20"
            image_style="interes_image"
          />
        </li>
      </ul>
    </section>
  );
};
export default Intereses;
