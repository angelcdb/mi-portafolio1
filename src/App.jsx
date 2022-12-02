import React from "react";
import { BrowserRouter} from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Home />
        <Footer />
    </BrowserRouter>

    //    <div className="App">
    //   <h1>Mi Portafolio</h1>
    //   <Header />
    // </div>
  );
}

export default App;
