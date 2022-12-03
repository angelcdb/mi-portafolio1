import React from 'react';
import '../styles/expeIniciarS.css';

import google from '../assets//Imagenes/google-icon.png';
import twitter from '../assets//Imagenes/twitter-icon.png';
import { Link } from 'react-router-dom';

const ExpeIniciarS = () => {
    return (
        <section className="login">
        <section className="login__container">
          <h2 tabindex="0">Inicia sesión</h2>
          <form className="login__container--form">
            <input aria-label="Correo" className="input" type="text" placeholder="Correo" />
            <input aria-label="Contraseña" className="input" type="password" placeholder="Contraseña" />
            <button className="button-ic"><a href=''>Iniciar sesión</a></button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" name="" id="cbox1" value="checkbos" />Recuérdame
              </label>
              <a href="">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div><img src={google} alt="iconGoogle" />Inicia sesión con Google</div>
            <div><img src={twitter} alt="iconTwitter" />Inicia sesión con Twitter</div>
          </section>
          <p className="login__container--register">No tienes ninguna cuenta
          <Link to="/experimento-registrate">Regístrate</Link></p>
        </section>
    </section>
    );
}

export { ExpeIniciarS };