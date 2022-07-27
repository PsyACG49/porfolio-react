import React from "react";
import { NavLink } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <NavLink to="/login">
        {" "}
        <AiFillSetting />
      </NavLink>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        {" "}
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://dribbble.com" target="_blank" rel="noreferrer">
        <AiFillFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
