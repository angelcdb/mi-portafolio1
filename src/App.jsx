import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

import { CssGrid } from "./components/CssGrid";
import { CssDomino } from "./components/CssDomino";
import { ExpeIniciarS } from "./components/ExpeIniciarS";
import { ExpeRegistrate } from "./components/ExpeRegistrate";
import { NotFound } from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cssgrid" element={<CssGrid />} />
        <Route path="/cssdomino" element={<CssDomino />} />
        <Route path="/experimento-iniciar-seccion" element={<ExpeIniciarS />} />
        <Route path="/experimento-registrate" element={<ExpeRegistrate />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
