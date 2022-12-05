import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

import { Tecnologias } from "./Tecnologias";
import { Habilidades } from "./Habilidades";

import Batatabit from "../assets/Imagenes/batataBIT.png";
import IniciarS from "../assets/Imagenes/Expe-Iniciar-sesion.png";
import figuras from "../assets/Imagenes/figueras-ge.jpg";
import pasta from "../assets/Imagenes/pasta.jpg";
import yardSale from "../assets/Imagenes/yardSale.png";

const Home = () => {
  return (
    <main className="main">
      <h2 className="title">Hola, Soy Angel Contreras</h2>
      <p className="sub-title">Estudiante, Frontend Developer...</p>
      <p className="pp">
        Me especializo en diseñar sitios web, atractivos, efectivos y
        funcionales. Tengo experiencia como desarrollador de software mas de 2
        años, en diseño práctico, desarrollo web, programación en general y
        amante de las buenas prácticas. Así como también me encuentro
        constantemente aprendiendo sobre nuevas tecnologías y herramientas.
      </p>
      <div className="descripcion">
        <h2 className="h2-descripcion">Mis Proyectos:</h2>
      </div>

      <section className="containers">
        <section className="container-left">
          <a href="https://angelcdb.github.io/curso-practico-javascript-platzi/" rel="noreferrer noopener" target="_blank">
            <div className="container-card">
              <h4>Calcula</h4>
              <div className="info">
                <ol className="ol">
                  <li>Porcentajes y Descuentos</li>
                  <li>Promedio, Media, Moda</li>
                  <li>Media Armónica</li>
                  <li>Cuotas de pago</li>
                </ol>
              </div>
            </div>
          </a>

          <a href="https://angelcdb.github.io/curso-practico-javascript-platzi/figuras8.html" rel="noreferrer noopener" target="_blank">
            <div className="container-card">
              <h4>Figuras Geómetricas</h4>
              <div className="info">
                <ol className="ol">
                  <li>Perímetro y área de Cuadrado</li>
                  <li>Triángulo</li>
                  <li>Circulo</li>
                </ol>
              </div>
            </div>
          </a>

          <a href="https://angelcdb.github.io/react-hooks/" rel="noreferrer noopener" target="_blank">
            <div className="container-card">
              <h4>API: Rick & Morty</h4>
              <div className="info">
                <ol className="ol">
                  <li>Buscar Personajes</li>
                  <li>Eliminar Personajes</li>
                  <li>Personajes Favoritos</li>
                </ol>
              </div>
            </div>
          </a>

          <a href="https://angelcdb.github.io/curso-patrones-react2/" rel="noreferrer noopener" target="_blank">
            <div className="container-card">
              <h4>TODOs</h4>
              <div className="info">
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
        <h2 className="h2-experimentos">Experimentos:</h2>

        <div className="carrusel__container">
          <div className="carrusel-item">
            <img src={Batatabit} className="carrusel-item__img" alt="imagen" />

            <div className="carrusel-item__details">
              <p className="carrusel-item__details-title">BatataBIT</p>

              <button className="carrusel-item__details-subtitle" type="button">
                <a href="https://angelcdb.github.io/batataBIT/" rel="noreferrer noopener" target="_blank">Ver</a>
              </button>
            </div>
          </div>

          <div className="carrusel-item">
            <img src={IniciarS} className="carrusel-item__img" alt="imagen" />
            <div className="carrusel-item__details">
              <p className="carrusel-item__details-title">Registro</p>
              <Link to="/experimento-iniciar-seccion">
                <button
                  className="carrusel-item__details-subtitle"
                  type="button"
                >
                  <a href="/">Ver</a>
                </button>
              </Link>
            </div>
          </div>

          <div className="carrusel-item">
            <img src={figuras} className="carrusel-item__img" alt="imagen" />
            <div className="carrusel-item__details">
              <p className="carrusel-item__details-title">Css Grid</p>
              <Link to="/cssgrid">
                <button
                  className="carrusel-item__details-subtitle"
                  type="button"
                >
                  <a href="/">Ver</a>
                </button>
              </Link>

              <Link to="/cssdomino">
                <button
                  className="carrusel-item__details-subtitle"
                  type="button"
                >
                  <a href="/">Ver</a>
                </button>
              </Link>
            </div>
          </div>

          <div className="carrusel-item">
            <img src={pasta} className="carrusel-item__img" alt="imagen" />
            <div className="carrusel-item__details">
              <p className="carrusel-item__details-title">Pastas Italianas</p>
              <button className="carrusel-item__details-subtitle" type="button">
                <a href="https://angelcdb.github.io/food/" rel="noreferrer noopener" target="_blank">Ver</a>
              </button>
            </div>
          </div>
          <div className="carrusel-item">
            <img src={yardSale} className="carrusel-item__img" alt="imagen" />
            <div className="carrusel-item__details">
              <p className="carrusel-item__details-title">Tienda Online</p>
              <button className="carrusel-item__details-subtitle" type="button">
                <a href="https://angelcdb.github.io/curso-frontend-developer-prac-js/" rel="noreferrer noopener" target="_blank">
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
