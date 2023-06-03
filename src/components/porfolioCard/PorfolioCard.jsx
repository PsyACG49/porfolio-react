import React from "react";
import "./porfolioCard.css";

const PorfolioCard = ({ cardInfo }) => {
  const { title, img, urlRepo, urlDemo } = cardInfo;
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-img">
        <img src={img} alt="title proyect" />
      </div>

      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a href={urlRepo} className="btm" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={urlDemo} className="btm" target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default PorfolioCard;
