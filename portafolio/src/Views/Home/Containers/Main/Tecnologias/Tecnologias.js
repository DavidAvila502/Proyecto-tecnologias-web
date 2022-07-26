import React from "react";
import "./Tecnologias.css";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import CardComponent from "../../../../../Components/CardComponent/CardComponent";

const Tecnologias = () => {
  return (
    <section className="tecnologias">
      <SectionTitle title="Tecnologias" color="#000" css_class="mt_25 mb_40" />
      <ul className="tecnologia_list">
        <li className="tecnologia_list_item">
          <CardComponent
            image="assets/images/react.svg"
            title="REACT"
            description="Herrramienta de desarrollo de aplicaciones web."
            card_style="tecnologia_card"
            title_style="quicksand fw_700 fz_20 mb_19"
            description_style="quicksand fw_500 fz_12 mh_25"
            image_style="image_tec mt_11"
          />
        </li>
        <li className="tecnologia_list_item">
          <CardComponent
            image="assets/images/react.svg"
            title="REACT NATIVE"
            description="Herrramienta de desarrollo de aplicaciones moviles Andoroid/Ios."
            card_style="tecnologia_card"
            title_style="quicksand fw_700 fz_20 mb_19"
            description_style="quicksand fw_500 fz_12 mh_25"
            image_style="image_tec mt_11"
          />
        </li>
        <li className="tecnologia_list_item">
          <CardComponent
            image="assets/images/node.svg"
            title="NODE JS"
            description="Entorno en tiempo de ejecucion para javascript en capa del servidor."
            card_style="tecnologia_card"
            title_style="quicksand fw_700 fz_20 mb_19"
            description_style="quicksand fw_500 fz_12 mh_25"
            image_style="image_tec mt_11"
          />
        </li>
        <li>
          <CardComponent
            image="assets/images/javascript.svg"
            title="JAVASCRIPT"
            description="Lenguaje de programación interpretado."
            card_style="tecnologia_card"
            title_style="quicksand fw_700 fz_20 mb_19"
            description_style="quicksand fw_500 fz_12 mh_25"
            image_style="image_tec mt_11"
          />
        </li>
      </ul>

      <ul className="tecnologia_list mt_70">
        <li className="tecnologia_list_item">
          <CardComponent
            image="assets/images/html.svg"
            title="HTML"
            description="Lenguaje de marcado para paginas webs."
            card_style="tecnologia_card"
            title_style="quicksand fw_700 fz_20 mb_19"
            description_style="quicksand fw_500 fz_12 mh_25"
            image_style="image_tec mt_11"
          />
        </li>
        <li className="tecnologia_list_item">
          <CardComponent
            image="assets/images/css.svg"
            title="CSS"
            description="Hojas de estilo en cascada, para dar estilo a los sitios web."
            card_style="tecnologia_card"
            title_style="quicksand fw_700 fz_20 mb_19"
            description_style="quicksand fw_500 fz_12 mh_25"
            image_style="image_tec mt_11"
          />
        </li>
        <li className="tecnologia_list_item">
          <CardComponent
            image="assets/images/java.svg"
            title="JAVA"
            description="Entorno en tiempo de ejecucion para javascript en capa del servidor."
            card_style="tecnologia_card"
            title_style="quicksand fw_700 fz_20 mb_19"
            description_style="quicksand fw_500 fz_12 mh_25"
            image_style="image_tec mt_11"
          />
        </li>
        <li>
          <CardComponent
            image="assets/images/python.svg"
            title="PYTHON"
            description="Lenguaje de programacion de alto nivel."
            card_style="tecnologia_card"
            title_style="quicksand fw_700 fz_20 mb_19"
            description_style="quicksand fw_500 fz_12 mh_25"
            image_style="image_tec mt_11"
          />
        </li>
      </ul>
      <ul className="tecnologia_list mt_70 mb_70">
        <li className="tecnologia_list_item">
          <CardComponent
            image="assets/images/mysql.svg"
            title="MYSQL"
            description="Base de datos de modelo relacional."
            card_style="tecnologia_card"
            title_style="quicksand fw_700 fz_20 mb_19"
            description_style="quicksand fw_500 fz_12 mh_25"
            image_style="image_tec mt_11"
          />
        </li>
        <li className="tecnologia_list_item">
          <CardComponent
            image="assets/images/sql.svg"
            title="SQL"
            description="Lenguaje de consultas para bases de datos relacionales."
            card_style="tecnologia_card"
            title_style="quicksand fw_700 fz_20 mb_19"
            description_style="quicksand fw_500 fz_12 mh_25"
            image_style="image_tec mt_11"
          />
        </li>
      </ul>
    </section>
  );
};

export default Tecnologias;
