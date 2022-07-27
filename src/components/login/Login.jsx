import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";

import "./login.css";

function Login() {
  return (
    <div>
      <div className="container container__login">
        <form action="" className="login__form">
          <div className="login__buttons">
            <h2>Iniciar Sesion</h2>
            <NavLink to={"/"}>
              <button type="submit" className="btm btm-primary-radius">
                <MdOutlineArrowBack />
              </button>
            </NavLink>
          </div>
          <input type="text" placeholder="User" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="btm btm-primary">
            Sing In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
