import { useState } from "react";

import style from "./style.css";
import Massagem from "../../assets/img/espaco/linda-loira-recebendo-uma-massagem.jpg";
import Valores from "./value";

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
        <h1 className="div4_title">Integradores</h1>
      </div>

      {info === true && (
        <section className="valores">
          {/* ESPECIAS */}

          <h2>Osteopatia</h2>
          <div className="discription">
            <p>Osteopatia</p> <pre> </pre> <p>{Valores.v45}</p>
          </div>
          <div className="discription">
            <p>Osteopatia Pediátrica</p> <pre> </pre> <p>{Valores.v45}</p>
          </div>
          <div className="discription">
            <p>Osteopatia Genecológica</p> <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <h2>Harmonização Facial Botox</h2>
          <div className="discription">
            <p>Full Face (4 zonas)</p> <pre> </pre> <p>{Valores.v250}</p>
          </div>

          <div className="discription">
            <p>Full Face (1 zona)</p> <pre> </pre> <p>{Valores.v150}</p>
          </div>
          <h2>Ácido Hilurónico</h2>

          <div className="discription">
            <p>1 Seringa 1ml</p> <pre> </pre> <p>{Valores.v200}</p>
          </div>
          <h2>Boestimuladores</h2>

          <div className="discription">
            <p>Radiesse</p> <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Sculptra / Elleva</p> <pre> </pre> <p>{Valores.v450}</p>
          </div>
          <h2>Fios de PDO</h2>
          <div className="discription">
            <p>Multi / Spring</p> <pre> </pre> <p>{Valores.v15}</p>
          </div>
          <div className="discription">
            <p>Multi-fill</p> <pre> </pre> <p>{Valores.v75}</p>
          </div>
        </section>
      )}

      {/* MASSAGENS */}

      {info === true && (
        <section className="valores">
          

          <h2>Sob Cunsulta</h2>
          <div className="discription">
            <p>Hipnoterapia</p> <pre> </pre> <p>{Valores.v100}</p>
          </div>
          <div className="discription">
            <p>Mesa Radiónica</p>
            <pre> </pre> <p>{Valores.v75}</p>
          </div>
          <div className="discription">
            <p>Constelações Familiares</p>
            <pre> </pre> <p>{Valores.v60}</p>
          </div>
          <div className="discription">
            <p>Mapa Astral</p>
            <pre> </pre> <p>{Valores.v60}</p>
          </div>
          <div className="discription">
            <p>Massagem de Som</p>
            <pre> </pre> <p>{Valores.v60}</p>
          </div>
          <h2>Micropigmentação</h2>
          <div className="discription">
            <p>Consulta Avaliação</p> <pre> </pre> <p>{Valores.v18}</p>
          </div>
          <div className="discription">
            <p>Sobrancelha </p> <pre> </pre> <p>{Valores.v18}</p>
          </div>
          <div className="discription">
            <p>Lábios</p> <pre> </pre> <p>{Valores.v18}</p>
          </div>
          <h2>Extensão de Pestanas</h2>
          <div className="discription">
            <p>Clássica </p> <pre> </pre> <p>{Valores.v18}</p>
          </div>
          <div className="discription">
            <p>Hibrida </p> <pre> </pre> <p>{Valores.v18}</p>
          </div>
          <div className="discription">
            <p>Volume Russo</p> <pre> </pre> <p>{Valores.v18}</p>
          </div>
          <br></br>
          <br></br>
          <div className="discription">
            <p>**Tratamentos Personalizados Sob Consulta**</p>
          </div>
        </section>
      )}
    </div>
  );
}

export default Div;
