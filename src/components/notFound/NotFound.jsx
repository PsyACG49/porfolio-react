import React from "react";
import IMG from "../../assets/404.svg";

import "./notFound.css";

const NotFound = () => {
  return (
    <>
      <div className="container container__notFound">
        <img src={IMG} alt="pagina no encontrada" className="image__notFound" />
        <p>Error: Contact your provider</p>
      </div>
    </>
  );
};

export default NotFound;
