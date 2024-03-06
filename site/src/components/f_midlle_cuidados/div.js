import { useState } from "react";

import style from "./style.css";
import Massagem from "../../assets/img/espaco/linda-loira-recebendo-uma-massagem.jpg";

function Div() {
  const [info, setInfo] = useState(false);

  function InfoOn() {
    setInfo(true);
  }

  function InfoOff() {
    setInfo(false);
  }

  return (
    <div
      className="Full_service"
      onMouseLeave={InfoOff}
      onMouseEnter={InfoOn}
    >

      <h1>CUIDADOS CORPO COMPLETO</h1>

      {info === true && (
        <section className="valores">
          <h2>Massagem </h2>
          <p>R$ 52</p>
          <h2>Massagem </h2>
          <p>R$ 52</p>
          <h2>Massagem </h2>
          <p>R$ 52</p>
        </section>
      )}
    </div>
  );
}

export default Div;
