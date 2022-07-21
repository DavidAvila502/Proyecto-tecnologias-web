import React from "react";
import "./Tecnologias.css";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import TecnologiaCard from "../../../../../Components/TecnologiaCard/TecnologiaCard";

const Tecnologias = () => {
  return (
    <section className="tecnologias">
      <SectionTitle title="Tecnologias" color="#000" />
      <ul className="tecnologia_list">
        <li className="tecnologia_list_item">
          <TecnologiaCard
            title="REACT"
            image="assets/images/react.svg"
            description="Herrramienta de desarrollo de aplicaciones web."
          />
        </li>
        <li className="tecnologia_list_item">
          <TecnologiaCard
            title="REACT NATIVE"
            image="assets/images/react.svg"
            description="Herrramienta de desarrollo de aplicaciones moviles Andoroid/Ios."
          />
        </li>
        <li className="tecnologia_list_item">
          <TecnologiaCard
            title="NODE JS"
            image="assets/images/node.svg"
            description="Entorno en tiempo de ejecucion para javascript en capa del servidor."
          />
        </li>
        <li>
          <TecnologiaCard
            title="JAVASCRIPT"
            image="assets/images/javascript.svg"
            description="Lenguaje de programación interpretado."
          />
        </li>
      </ul>

      <ul className="tecnologia_list mt_70">
        <li className="tecnologia_list_item">
          <TecnologiaCard
            title="HTML"
            image="assets/images/html.svg"
            description="Lenguaje de marcado para paginas webs."
          />
        </li>
        <li className="tecnologia_list_item">
          <TecnologiaCard
            title="CSS"
            image="assets/images/css.svg"
            description="Hojas de estilo en cascada, para dar estilo a los sitios web."
          />
        </li>
        <li className="tecnologia_list_item">
          <TecnologiaCard
            title="JAVA"
            image="assets/images/java.svg"
            description="Entorno en tiempo de ejecucion para javascript en capa del servidor."
          />
        </li>
        <li>
          <TecnologiaCard
            title="PYTHON"
            image="assets/images/python.svg"
            description="Lenguaje de programacion de alto nivel."
          />
        </li>
      </ul>

      <ul className="tecnologia_list mt_70 mb_70">
        <li className="tecnologia_list_item">
          <TecnologiaCard
            title="MYSQL"
            image="assets/images/mysql.svg"
            description="Base de datos de modelo relacional."
          />
        </li>
        <li className="tecnologia_list_item">
          <TecnologiaCard
            title="SQL"
            image="assets/images/sql.svg"
            description="Lenguaje de consultas para bases de datos relacionales."
          />
        </li>
      </ul>
    </section>
  );
};

export default Tecnologias;
