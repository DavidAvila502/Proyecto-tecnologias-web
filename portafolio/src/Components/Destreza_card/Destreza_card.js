import React from "react";
import "./Destreza_card.css";

const Destreza_card = (props) => {
  const { destreza_name, destreza_image, description } = props;

  return (
    <div className="list_destrezas_card">
      <div className="list_image_container">
        <img
          src={destreza_image}
          alt={description}
          className="destreza_image"
        />
      </div>

      <p className="text_destreza">{destreza_name}</p>
    </div>
  );
};

export default Destreza_card;
