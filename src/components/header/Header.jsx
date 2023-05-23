import React from "react";
import "./header.css";
import CTA from "./CTA";
import LOGO from "../../assets/acgLogo.png";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <section id="home" className="container header_container">
        <img src={LOGO} alt="logo acgcode" className="me_logo" />
        <h5>Hello I´m</h5>
        <h1>Andres Cuevas</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" className="me_img" />
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
