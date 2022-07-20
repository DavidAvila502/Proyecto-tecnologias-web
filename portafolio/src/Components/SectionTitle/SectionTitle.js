import React from "react";

import "./SectionTitle.css";

const SectionTitle = (props) => {
  const { title, color, class_css } = props;

  console.log(color);
  return (
    <h2 style={{ color: color }} className="sc_title">
      {title}
    </h2>
  );
};

export default SectionTitle;
