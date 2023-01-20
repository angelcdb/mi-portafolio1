import React from "react";

import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import sass from "../assets/icons/sass.png";
import bootstrap from "../assets/icons/Bootstrap_logo.svg.png";
import js from "../assets/icons/javaScript.png";
import react from "../assets/icons/react.png";
import git from "../assets/icons/git.png";
import github from "../assets/icons/github.png";

const Tecnologias = () => {
  return (
    <section className="herramientas">
      <h2 className="h2-herramientas">Tecnologías:</h2>
      <ul className="ul">
        <li>
          <p>HTML</p>
          <img src={html} alt="icono" />
        </li>
        <li>
          <p>CSS</p>
          <img src={css} alt="icono" />
        </li>
        <li>
          <p>SASS</p>
          <img src={sass} alt="icono" />
        </li>
        <li>
          <p>BOOTSTRAP</p>
          <img src={bootstrap} className="bootstrap" alt="icono" />
        </li>
        <li>
          <p>JAVASCRIPT</p>
          <img src={js} className="js" alt="icono" />
        </li>
        <li>
          <p>REACT</p>
          <img src={react} alt="icono" />
        </li>
        <li>
          <p>GIT</p>
          <img src={git} className="git" alt="icono" />
        </li>
        <li>
          <p>GITHUB</p>
          <img src={github} alt="icono" />
        </li>
      </ul>
    </section>
  );
};

export { Tecnologias };