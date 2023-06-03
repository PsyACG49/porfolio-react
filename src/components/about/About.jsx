import React from "react";
import { FaAward } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src="https://i.ibb.co/rdFDb5C/me-about.jpg" alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Proyects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I consider myself passionate about technologies and focused on web
            development. I motivates to acquire new knowledge and experiences to
            be at the forefront of the field computational. As well as fulfill
            all my goals and objectives. Tenacity, proactivity and
            responsibility are qualities that best define me.
          </p>
          <a href="#contact" className="btm btm-primary">
            Let´s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
