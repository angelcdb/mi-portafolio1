import React from "react";
import "../styles/header.css";

import img1 from "../assets/Mi-Logos/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header__nav">
      <div className="header__nav--left">
        <Link to="/">
          <img src={img1} className="logo" alt="imagen" />
        </Link>
      </div>

      <div className="titulo">
        <h1>Bienvenidos</h1>
      </div>
    </nav>
  );
};

export { Header };
