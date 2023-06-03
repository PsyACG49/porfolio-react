import React from "react";
import ExperienceCard from "../experienceCard/ExperienceCard";
import EXP from "./experiences.json";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {EXP.map((el) => (
          <ExperienceCard cardInfo={el} key={el.id} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
