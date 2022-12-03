import React from "react";
import { Link } from "react-router-dom";
import "../styles/expeRegistrate.css";

const ExpeRegistrate = () => {
  return (
    <section className="login2">
      <section className="login__container">
        <h2>Registrate</h2>
        <form className="login__container--form">
          <input className="input" type="text" placeholder="Nombre" />
          <input className="input" type="text" placeholder="Correo" />
          <input className="input" type="password" placeholder="Contraseña" />
          <Link to="/experimento-iniciar-seccion">
            <button className="button2">Iniciar Sesion</button>
          </Link>
          <button className="button2">Registrate</button>
        </form>
      </section>
    </section>
  );
};

export { ExpeRegistrate };