import React from "react";
import "../styles/header.css";

import img1 from "../assets/Mi-Logos/logo1.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-nav">
      <div className="navbar-left">
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
