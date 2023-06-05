import React from "react";
import CV from "../../assets/cv Andres.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btm">
        Download CV
      </a>
      <a href="#contact" className="btm btm-primary">
        Let´s Talk
      </a>
    </div>
  );
};

export default CTA;
