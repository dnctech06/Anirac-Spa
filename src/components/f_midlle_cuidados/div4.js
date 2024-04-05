import { useState } from "react";

import style from "./style.css";
import Massagem from "../../assets/img/espaco/linda-loira-recebendo-uma-massagem.jpg";
import Valores from "./value"



function Div() {
  const [info, setInfo] = useState(false);

  function InfoOn() {
    if (info === true) {
      setInfo(false);
    } else {
      setInfo(true);
    }
  }

  return (
    <div className="Full_service_div4" onClick={InfoOn}>
      <div className="Title_FullBody">
        <h1 className="div4_title">Especiais</h1>
      </div>

      {info === true && (
        <section className="valores">
          {/* ESPECIAS */}

          <h2>Especias</h2>

          <div className="discription">
            <p>Mesa Radiônica</p> <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Hipnoterapia</p>
            <pre> </pre> <p>{Valores.v60}</p>
          </div>
          <br></br>
          <br></br>
          <div className="discription">
            <p>**Tratamentos Personalizados Sob Consulta**</p>
          </div>
        </section>
      )}

          {/* MASSAGENS */}

      {info === true && (
        <section className="valores">


          <h2>Massagens</h2>

          <div className="discription">
            <p>Corpo Mente e Alma 120'</p> <pre> </pre> <p>{Valores.v100}</p>
          </div>
          <div className="discription">
            <p>Alma Revitalizada 70'</p>
            <pre> </pre> <p>{Valores.v75}</p>
          </div>
          <div className="discription">
            <p>Toque Terapêutio 60'</p>
            <pre> </pre> <p>{Valores.v60}</p>
          </div>
          <div className="discription">
            <p>Barras Access</p>
            <pre> </pre> <p>{Valores.v60}</p>
          </div>

          <div className="discription">
            <p>info gerais</p> <pre> </pre> <p>{Valores.v50}</p>
          </div>
        </section>
      )}
    </div>
  );
}

export default Div;
