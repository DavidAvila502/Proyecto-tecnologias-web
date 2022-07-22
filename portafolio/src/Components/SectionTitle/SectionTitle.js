import React from "react";

import "./SectionTitle.css";

const SectionTitle = (props) => {
  const { title, color, css_class } = props;

  return (
    <h2 style={{ color: color }} className={"sc_title" + " " + css_class}>
      {title}
    </h2>
  );
};

export default SectionTitle;
