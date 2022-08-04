import React from "react";
import "./Intereses.css";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import CardComponent from "../../../../../Components/CardComponent/CardComponent";
import { useGeneralContext } from "../../../../../Context/GenearlContext";
const Intereses = () => {
  const datos = useGeneralContext();
  let interesesData = datos.mainData.Interes;

  return (
    <section className="intereses" id="seccion_interes">
      <SectionTitle
        title={interesesData.titulo}
        color="#3F3D56"
        css_class="mt_25 mb_40"
      />
      <ul className="intereses_list">
        {interesesData.Card.map((item, index) => {
          if (index !== interesesData.Card.length - 1) {
            return (
              <li className="in_list_item" key={index}>
                <CardComponent
                  image={`http://localhost:1337${item.icono.data.attributes.url}`}
                  title={item.titulo}
                  card_style="interes_card"
                  title_style="fw_700 open_sans semiblue mt_25 fz_20"
                  image_style="interes_image"
                />
              </li>
            );
          } else {
            return (
              <li key={index}>
                <CardComponent
                  image={`http://localhost:1337${item.icono.data.attributes.url}`}
                  title={item.titulo}
                  card_style="interes_card"
                  title_style="fw_700 open_sans semiblue mt_25 fz_20"
                  image_style="interes_image"
                />
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
};
export default Intereses;
