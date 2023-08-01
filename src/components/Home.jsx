import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

import { Tecnologias } from "./Tecnologias";
import { Habilidades } from "./Habilidades";

import FotoPerfil from "../assets/Imagenes/fotoPerfil.png";
import Batatabit from "../assets/Imagenes/batataBIT.png";
import IniciarS from "../assets/Imagenes/Expe-Iniciar-sesion.png";
import figuras from "../assets/Imagenes/figueras-ge.jpg";
import pasta from "../assets/Imagenes/pasta.jpg";
import yardSale from "../assets/Imagenes/yardSale.png";
// import { NotFound } from "./NotFound";

const Home = () => {
  return (
    <main className="main">
      <div className="titles__and--photo">
        <div className="titles">
          <h2 className="title">Hola, Soy Angel Contreras</h2>
          <p className="sub__title">React Frontend Developer...</p>
        </div>
        <div className="foto">
          <img src={FotoPerfil} className="foto__Perfil" alt="foto" />
        </div>
      </div>

      <p className="descripcion">
        Me especializo en diseñar sitios web, atractivos, efectivos y
        funcionales. Tengo experiencia como desarrollador de software mas de 2
        años, en diseño práctico, desarrollo web y amante de las buenas
        prácticas. Así como también me encuentro constantemente aprendiendo
        sobre nuevas tecnologías y herramientas.
      </p>
      <div className="pp">
        <h2 className="pp__h2">Mis Proyectos:</h2>
      </div>

      <section className="containers">
        <section className="containers__container">
          <a
            href="https://angelcdb.github.io/curso-practico-javascript-platzi/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <div className="container__card">
              <h4>Calcula</h4>
              <div className="container__card--info">
                <ol className="ol">
                  <li>Porcentajes y Descuentos</li>
                  <li>Promedio, Media, Moda</li>
                  <li>Media Armónica</li>
                  <li>Cuotas de pago</li>
                </ol>
              </div>
            </div>
          </a>

          <a
            href="https://angelcdb.github.io/curso-practico-javascript-platzi/figuras8.html"
            rel="noreferrer noopener"
            target="_blank"
          >
            <div className="container__card">
              <h4>Figuras Geómetricas</h4>
              <div className="container__card--info">
                <ol className="ol">
                  <li>Perímetro y área de Cuadrado</li>
                  <li>Triángulo</li>
                  <li>Circulo</li>
                </ol>
              </div>
            </div>
          </a>

          <a
            href="https://angelcdb.github.io/react-hooks/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <div className="container__card">
              <h4>API: Rick & Morty</h4>
              <div className="container__card--info">
                <ol className="ol">
                  <li>Buscar Personajes</li>
                  <li>Eliminar Personajes</li>
                  <li>Personajes Favoritos</li>
                </ol>
              </div>
            </div>
          </a>

          <a
            href="https://angelcdb.github.io/curso-patrones-react2/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <div className="container__card">
              <h4>TODOs</h4>
              <div className="container__card--info">
                <ol className="ol">
                  <li>Agrega un TODOs</li>
                  <li>Elimina un TODOs</li>
                  <li>Edita un TODOs</li>
                </ol>
              </div>
            </div>
          </a>
        </section>
      </section>

      <Habilidades />

      <section className="carrusel">
        <h2 className="h2__experimentos">Experimentos:</h2>

        <div className="carrusel__container">
          <div className="carrusel__item">
            <img src={Batatabit} className="carrusel__item--img" alt="imagen" />

            <div className="carrusel__item--details">
              <p className="carrusel__item--details--title">BatataBIT</p>

              <button
                className="carrusel__item--details-subtitle"
                type="button"
              >
                <a
                  href="https://angelcdb.github.io/batataBIT/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Ver
                </a>
              </button>
            </div>
          </div>

          <div className="carrusel__item">
            <img src={IniciarS} className="carrusel__item--img" alt="imagen" />
            <div className="carrusel__item--details">
              <p className="carrusel__item--details--title">Registro</p>
              <Link to="/experimento-iniciar-seccion">
                <button
                  className="carrusel__item--details-subtitle"
                  type="button"
                >
                  <a href="/">Ver</a>
                </button>
              </Link>
            </div>
          </div>

          <div className="carrusel__item">
            <img src={figuras} className="carrusel__item--img" alt="imagen" />
            <div className="carrusel__item--details">
              <p className="carrusel__item--details--title">Css Grid</p>
              <Link to="/cssgrid">
                <button
                  className="carrusel__item--details-subtitle"
                  type="button"
                >
                  <a href="/">Ver</a>
                </button>
              </Link>

              <Link to="/cssdomino">
                <button
                  className="carrusel__item--details-subtitle"
                  type="button"
                >
                  <a href="/">Ver</a>
                </button>
              </Link>
            </div>
          </div>

          <div className="carrusel__item">
            <img src={pasta} className="carrusel__item--img" alt="imagen" />
            <div className="carrusel__item--details">
              <p className="carrusel__item--details--title">Pastas Italianas</p>
              <button
                className="carrusel__item--details-subtitle"
                type="button"
              >
                <a
                  href="https://angelcdb.github.io/food/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Ver
                </a>
              </button>
            </div>
          </div>
          <div className="carrusel__item">
            <img src={yardSale} className="carrusel__item--img" alt="imagen" />
            <div className="carrusel__item--details">
              <p className="carrusel__item--details--title">Tienda Online</p>
              <button
                className="carrusel__item--details-subtitle"
                type="button"
              >
                <a
                  href="https://angelcdb.github.io/curso-frontend-developer-prac-js/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Ver
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Tecnologias />
    </main>
  );
};

export { Home };
