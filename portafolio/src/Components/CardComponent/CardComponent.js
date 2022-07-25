import React from "react";
import "./CardComponent.css";
const CardComponent = (props) => {
  const {
    image,
    title,
    description,
    card_style,
    image_style,
    title_style,
    description_style,
  } = props;

  return (
    <article className={card_style}>
      <img src={image} alt={title} className={image_style} />

      <h2 className={title_style}>{title}</h2>

      <p className={description_style}>{description}</p>
    </article>
  );
};

export default CardComponent;
