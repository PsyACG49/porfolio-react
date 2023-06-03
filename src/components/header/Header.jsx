import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <section id="home" className="container header_container">
        <h5>Hello I´m</h5>
        <h1>Andres Cuevas</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img
            src="https://i.ibb.co/BTnB6s9/me.png"
            alt="me"
            className="me_img"
          />
        </div>

        <a href="#contact" className="scroll_down">
          {" "}
          Scroll Down
        </a>
      </section>
    </header>
  );
};

export default Header;
