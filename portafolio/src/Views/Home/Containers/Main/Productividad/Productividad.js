import React from "react";
import "./Productividad.css";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import CardComponent from "../../../../../Components/CardComponent/CardComponent";

const Productividad = () => {
  return (
    <section className="productividad" id="seccion_productividad">
      <SectionTitle
        title="Productividad"
        color="#7A8D99"
        css_class="mt_25 mb_40"
      />
      <ul className="productividad_list">
        <li className="productividad_list_item">
          <CardComponent
            image="assets/images/fazt_work.svg"
            title="Velocidad"
            description="Desarrollar lo antes posible."
            card_style="normalCard"
            title_style="open_sans fw_700 product_title semiblue mt_4"
            description_style="open_sans fw_700 product_description semiblue mh_32 mt_8"
            image_style="normal_image"
          />
        </li>

        <li className="productividad_list_item">
          <CardComponent
            image="assets/images/pensar.svg"
            title="Planeación"
            description="Planeacion del proyecto de inicio a fin."
            card_style="normalCard"
            title_style="open_sans fw_700 product_title semiblue mt_4"
            description_style="open_sans fw_700 product_description semiblue mh_32 mt_8"
            image_style="normal_image"
          />
        </li>

        <li className="productividad_list_item">
          <CardComponent
            image="assets/images/scrum.svg"
            title="Metodologias Agiles"
            description="Uso de medologia agil SCRUM para el desarrollo."
            card_style="normalCard"
            title_style="open_sans fw_700 product_title semiblue mt_4"
            description_style="open_sans fw_700 product_description semiblue mh_32 mt_8"
            image_style="normal_image"
          />
        </li>

        <li>
          <CardComponent
            image="assets/images/escalabilidad.svg"
            title="Escalabilidad"
            description="Desarrollando proyectos escalables pensando a futuro."
            card_style="normalCard"
            title_style="open_sans fw_700 product_title semiblue mt_4"
            description_style="open_sans fw_700 product_description semiblue mh_32 mt_8"
            image_style="normal_image"
          />
        </li>
      </ul>
    </section>
  );
};

export default Productividad;
