import React from "react";
import ReactDOM from "react-dom/client";

import Primeiro from "./componentes/Primeiro";
import BomDia from "./componentes/BomDia";
import { BoaNoite, BoaTarde } from "./componentes/Multiplos";
import Saudacao from "./componentes/Saudacao";

// const elemento = <h1>Olá Mundo</h1>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Saudacao tipo="Bom Dia" nome="João" />
  </div>
);
