import React from "react";
import "./DestrezaCard.css";

const DestrezaCard = (props) => {
  const { destreza_name, destreza_image } = props;

  return (
    <div className="list_destrezas_card">
      <div className="list_image_container">
        <img
          src={destreza_image}
          alt={destreza_name}
          className="destreza_image"
        />
      </div>

      <p className="text_destreza">{destreza_name}</p>
    </div>
  );
};

export default DestrezaCard;
