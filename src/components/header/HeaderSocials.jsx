import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        {" "}
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://es-la.facebook.com/tEstO.TrancE"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
