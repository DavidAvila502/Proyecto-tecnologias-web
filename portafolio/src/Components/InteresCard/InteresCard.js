import React from "react";
import "./InteresCard.css";
const InteresesCard = (props) => {
  const { title, image } = props;

  return (
    <article className="interes_card">
      <img src={image} alt={title} className="interes_image" />
      <h2 className="interes_title">{title}</h2>
    </article>
  );
};

export default InteresesCard;
