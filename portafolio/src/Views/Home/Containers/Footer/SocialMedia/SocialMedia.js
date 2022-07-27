import React from "react";
import "./SocialMedia.css";
const SocialMedia = () => {
  return (
    <section className="social_container">
      <p className="social_text ml_42">
        2022,David Avila Todos los derechos reservados.
      </p>
      <ul className="social_list mr_42">
        <li className="social_list-item mr_13">
          <img
            src="assets/images/facebook.svg "
            className="social_image"
            alt="facebook"
          />
        </li>
        <li className="social_list-item mr_13">
          <img
            src="assets/images/github.svg"
            className="social_image"
            alt="github"
          />
        </li>
        <li className="social_list-item">
          <img
            src="assets/images/instagram.svg"
            className="social_image"
            alt="instagram"
          />
        </li>
      </ul>
    </section>
  );
};

export default SocialMedia;
