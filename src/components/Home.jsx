import React from 'react';
import "../styles/home.css";

const Home = () => {
    return (
        <main className="main">
      <h2 className="title">Hola, Soy Angel Contreras</h2>
      <p className="sub-title">Estudiante, Frontend Developer...</p>
      <p className="pp">
      Me especializo en diseñar sitios web, atractivos, efectivos y funcionales. Tengo experiencia
      como desarrollador de software mas de 2 años, en diseño práctico, desarrollo web, programación
      en general y amante de las buenas prácticas. Así como también me encuentro constantemente
      aprendiendo sobre nuevas tecnologías y herramientas.
      </p>
      <div className="descripcion">
        <h2 className="h2-descripcion">Mis Proyectos:</h2>
      </div>
    </main>
    );
}

export { Home };