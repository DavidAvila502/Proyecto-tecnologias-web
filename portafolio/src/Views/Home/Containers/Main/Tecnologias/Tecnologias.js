import React from "react";
import "./Tecnologias.css";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import CardComponent from "../../../../../Components/CardComponent/CardComponent";
import { useGeneralContext } from "../../../../../Context/GenearlContext";
const Tecnologias = () => {
  const datos = useGeneralContext();
  let tecnologiaData = datos.mainData.Tecnologias;

  let infocards = tecnologiaData.Card;

  return (
    <section className="tecnologias" id="seccion_tecnologias">
      <SectionTitle
        title={tecnologiaData.titulo}
        color="#000"
        css_class="mt_25 mb_40"
      />
      <ul className="tecnologia_list mt_70 mb_70">
        {infocards.map((element, index) => {
          if ((index + 1) % 4 === 0) {
            return (
              <li className="tecnologia_list_item2" key={index}>
                <CardComponent
                  image={`http://localhost:1337${element.icono.data.attributes.url}`}
                  title={element.titulo}
                  description={element.descripcion}
                  card_style="tecnologia_card"
                  title_style="quicksand fw_700 fz_20 mb_19"
                  description_style="quicksand fw_500 fz_12 mh_25"
                  image_style="image_tec mt_11"
                />
              </li>
            );
          } else {
            return (
              <li className="tecnologia_list_item" key={index}>
                <CardComponent
                  image={`http://localhost:1337${element.icono.data.attributes.url}`}
                  title={element.titulo}
                  description={element.descripcion}
                  card_style="tecnologia_card"
                  title_style="quicksand fw_700 fz_20 mb_19"
                  description_style="quicksand fw_500 fz_12 mh_25"
                  image_style="image_tec mt_11"
                />
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
};

export default Tecnologias;
