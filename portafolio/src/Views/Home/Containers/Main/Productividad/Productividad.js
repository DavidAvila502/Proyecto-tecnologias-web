import React from "react";
import "./Productividad.css";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import CardComponent from "../../../../../Components/CardComponent/CardComponent";
import { useGeneralContext } from "../../../../../Context/GenearlContext";
const Productividad = () => {
  const datos = useGeneralContext();

  let productividadData = datos.mainData.Productividad;

  return (
    <section className="productividad" id="seccion_productividad">
      <SectionTitle
        title={productividadData.titulo}
        color="#7A8D99"
        css_class="mt_25 mb_40"
      />
      <ul className="productividad_list">
        {productividadData.Card.map((item, index) => {
          if (index !== productividadData.Card.length - 1) {
            return (
              <li className="productividad_list_item" key={index}>
                <CardComponent
                  image={`http://localhost:1337${item.icono.data.attributes.url}`}
                  title={item.titulo}
                  description={item.descripcion}
                  card_style="normalCard"
                  title_style="open_sans fw_700 product_title semiblue mt_4"
                  description_style="open_sans fw_700 product_description semiblue mh_32 mt_8 "
                  image_style="normal_image"
                />
              </li>
            );
          } else {
            return (
              <li key={index}>
                <CardComponent
                  image={`http://localhost:1337${item.icono.data.attributes.url}`}
                  title={item.titulo}
                  description={item.descripcion}
                  card_style="normalCard"
                  title_style="open_sans fw_700 product_title semiblue mt_4"
                  description_style="open_sans fw_700 product_description semiblue mh_32 mt_8 "
                  image_style="normal_image"
                />
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
};

export default Productividad;
