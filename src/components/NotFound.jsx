import React from "react";
import '../styles/notFound.css';

const NotFound = () => {
  return (
    <div className="caja">
      <div className="error">
        <p className="error-404">Error 404!</p>
        <p className="pag">Pagina no encontrada..</p>

        <a className="a" href="/">
          <button className="button">Regresar</button>
        </a>
      </div>
    </div>
  );
};

export { NotFound };