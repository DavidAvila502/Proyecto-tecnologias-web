import React from "react";
import "./SocialMedia.css";
import { useGeneralContext } from "../../../../../Context/GenearlContext";
const SocialMedia = () => {
  const datos = useGeneralContext();
  const socialData = datos.footerData;

  return (
    <section className="social_container">
      <p className="social_text ml_42">{socialData.copyright}</p>
      <ul className="social_list mr_42">
        {socialData.Social_icons.map((item, index) => (
          <li className="social_list-item mr_13" key={index}>
            <img
              src={`http://localhost:1337${item.icon.data.attributes.url}`}
              className="social_image"
              alt={item.titulo}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialMedia;
