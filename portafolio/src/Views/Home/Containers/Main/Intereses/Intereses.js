import React from "react";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import "./Intereses.css";
import InteresesCard from "../../../../../Components/InteresCard/InteresCard";
const Intereses = () => {
  return (
    <section className="intereses">
      <SectionTitle
        title="Interesado en aprender"
        color="#3F3D56"
        css_class="mt_25 mb_40"
      />
      <ul className="intereses_list">
        <li className="in_list_item">
          <InteresesCard title="Ingles" image="assets/images/ingles.svg" />
        </li>
        <li className="in_list_item">
          <InteresesCard
            title="Illustracion"
            image="assets/images/illustracion.svg"
          />
        </li>
        <li className="in_list_item">
          <InteresesCard title="Mongo DB" image="assets/images/mongo.svg" />
        </li>
        <li>
          <InteresesCard title="Flutter" image="assets/images/flutter.svg" />
        </li>
      </ul>
    </section>
  );
};
export default Intereses;
