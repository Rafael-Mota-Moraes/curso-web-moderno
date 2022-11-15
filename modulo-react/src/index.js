import React from "react";
import ReactDOM from "react-dom/client";

import Primeiro from "./componentes/Primeiro";
import BomDia from "./componentes/BomDia";
import { BoaNoite, BoaTarde } from "./componentes/Multiplos";

// const elemento = <h1>Olá Mundo</h1>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <BoaTarde nome="joão" />
    <BoaNoite nome="Daniel" />
  </div>
);
