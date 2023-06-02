import React from "react";
import IMG1 from "./../../assets/pf1.png";
import IMG2 from "./../../assets/pf2.png";
import IMG3 from "./../../assets/portfolio3.jpg";

import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="title proyect" />
          </div>

          <h3>C´Style</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/PsyACG49/CesStyling"
              className="btm"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://ces-style.web.app/"
              className="btm"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG2} alt="title proyect" />
          </div>

          <h3>ECAM COYOACAN</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/PsyACG49/ecam"
              className="btm"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://psyacg49.github.io/ecam/"
              className="btm"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG3} alt="title proyect" />
          </div>

          <h3>This is a porfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="http://tu"
              className="btm"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="http://yo"
              className="btm"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
