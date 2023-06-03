import React from "react";

import "./testimonialCard.css";

const TestimonialCard = ({ cardInfo }) => {
  const { img, bussine, comment } = cardInfo;
  return (
    <div>
      <div className="client__avatar">
        <img src={img} alt="Avatar one" />
      </div>
      <h5 className="client__name">{bussine}</h5>
      <small className="client__review">{comment}</small>
    </div>
  );
};

export default TestimonialCard;
