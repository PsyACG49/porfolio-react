import React from "react";
import PROYECTS from "./proyects.json";

import "./portfolio.css";
import PorfolioCard from "../porfolioCard/PorfolioCard";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {PROYECTS.map((el) => (
          <PorfolioCard cardInfo={el} key={el.id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
