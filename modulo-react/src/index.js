import React from "react";
import ReactDOM from "react-dom/client";

import Primeiro from "./componentes/Primeiro";
import BomDia from "./componentes/BomDia";
import { BoaNoite, BoaTarde } from "./componentes/Multiplos";
import Saudacao from "./componentes/Saudacao";
import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";

// const elemento = <h1>Olá Mundo</h1>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Pai nome="João" sobrenome="Silva">
      <Filho nome="Pedro" sobrenome="Silva" />
      <Filho nome="Marcelo" sobrenome="Silva" />
      <Filho nome="Maria" sobrenome="Silva" />
    </Pai>
  </div>
);
