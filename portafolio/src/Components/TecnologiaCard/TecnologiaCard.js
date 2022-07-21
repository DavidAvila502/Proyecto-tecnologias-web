import React from "react";
import "./TecnologiaCard.css";
const TecnologiaCard = (props) => {
  const { title, image, description } = props;

  return (
    <article className="tecnologia_card">
      <img src={image} className="image_tec" alt={title} />

      <h2 className="title_tec">{title}</h2>

      <p className="description_tec">{description}</p>
    </article>
  );
};

export default TecnologiaCard;
