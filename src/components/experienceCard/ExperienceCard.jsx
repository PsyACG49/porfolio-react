import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const ExperienceCard = ({ cardInfo }) => {
  const { title, experinces } = cardInfo;
  return (
    <div>
      <h3>{title}</h3>
      <div className="experience__content">
        {experinces.map((el) => (
          <article className="experience__details" key={el.experience}>
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>{el.experience}</h4>
              <small>{el.level}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
