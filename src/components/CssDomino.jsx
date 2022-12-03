import React from "react";
import "../styles/cssdomino.css";

const CssDomino = () => {
  return (
    <section className="todo">
      <h2>Cartas del Dominó</h2>
      <section className="container2">
        <section className="container__uno">
          <div className="carta">
            <div className="carta__uno--x">
              <div className="puntos"></div>
              <div className="puntos"></div>
            </div>

            <div className="carta__uno--medioarriba">
              <div className="puntos"></div>
              <div className="puntos"></div>
            </div>

            <div className="carta__uno--y">
              <div className="puntos"></div>
              <div className="puntos"></div>
            </div>
            <div className="media">
              <div className="bola"></div>
            </div>

            <div className="carta__uno--xx">
              <div className="puntos"></div>
              <div className="puntos"></div>
            </div>
            <div className="carta__uno--medioabajo">
              <div className="puntos"></div>
              <div className="puntos"></div>
            </div>
            <div className="carta__uno--yy">
              <div className="puntos"></div>
              <div className="puntos"></div>
            </div>
          </div>

          <div className="carta">
            <div className="carta__dos--x">
              <div className="puntos"></div>
              <div className="puntos"></div>
            </div>
            <div className="carta__dos--medioarriba">
              <div className="puntos"></div>
            </div>
            <div className="carta__dos--y">
              <div className="puntos"></div>
              <div className="puntos"></div>
            </div>

            <div className="media">
              <div className="bola"></div>
            </div>

            <div className="carta__uno--xx">
              <div className="puntos"></div>
              <div className="puntos"></div>
            </div>
            <div className="carta__uno--medioabajo">
              <div className="puntos"></div>
            </div>
            <div className="carta__uno--yy">
              <div className="puntos"></div>
              <div className="puntos"></div>
            </div>
          </div>

          <div className="carta">
            <div className="carta__dos--x">
              <div className="puntos"></div>
              <div className="puntos"></div>
            </div>

            <div className="carta__dos--y">
              <div className="puntos"></div>
              <div className="puntos"></div>
            </div>

            <div className="media">
              <div className="bola"></div>
            </div>

            <div className="carta__uno--xx">
              <div className="puntos"></div>
              <div className="puntos"></div>
            </div>
            <div className="carta__uno--yy">
              <div className="puntos"></div>
              <div className="puntos"></div>
            </div>
          </div>

          <div className="carta">
            <div className="carta__tres--x">
              <div className="puntos"></div>
            </div>
            <div className="carta__uno--medioarriba">
              <div className="puntos"></div>
            </div>
            <div className="carta__tres--y">
              <div className="puntos"></div>
            </div>

            <div className="media">
              <div className="bola"></div>
            </div>

            <div className="carta__tres--arriba">
              <div className="puntos"></div>
            </div>
            <div className="carta__uno--medioabajo">
              <div className="puntos"></div>
            </div>
            <div className="carta__tres--yy">
              <div className="puntos"></div>
            </div>
          </div>

          <div className="carta">
            <div className="carta__tres--x">
              <div className="puntos"></div>
            </div>
            <div className="carta__tres--y">
              <div className="puntos"></div>
            </div>

            <div className="media">
              <div className="bola"></div>
            </div>

            <div className="carta__tres--arriba">
              <div className="puntos"></div>
            </div>
            <div className="carta__tres--yy">
              <div className="puntos"></div>
            </div>
          </div>

          <div className="carta">
            <div className="carta__uno--medioarriba">
              <div className="puntos"></div>
            </div>

            <div className="media">
              <div className="bola"></div>
            </div>

            <div className="carta__uno--medioabajo">
              <div className="puntos"></div>
            </div>
          </div>

          <div className="carta">
            <div className="media">
              <div className="bola"></div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export { CssDomino };
