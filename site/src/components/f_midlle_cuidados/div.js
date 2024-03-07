import { useState } from "react";

import style from "./style.css";
import Massagem from "../../assets/img/espaco/linda-loira-recebendo-uma-massagem.jpg";
const v40 = "- 40,00€";
const v45 = "- 45,00€";
const v60 = "- 60,00€";
const v150 = "- 150,00€";
const v27 = "- 27,00€";
const v25 = "- 25,00€";
const v20 = "- 20,00€";
const v18 = "- 18,00€";
const v80 = "- 80,00€";
const v99 = "- 99,00€";
const v100 = "- 100,00€";
const v200 = "- 200,00€";
const v275 = "- 275,00€";
const v250 = "- 250,00€";

function Div() {
  const [info, setInfo] = useState(false);

  function InfoOn() {
    setInfo(true);
  }

  function InfoOff() {
    setInfo(false);
  }

  return (
    <div className="Full_service" onMouseLeave={InfoOff} onMouseEnter={InfoOn}>
      <div className="Title_FullBody">
        <h1>CUIDADOS</h1>
        <h1>CORPO </h1>
        <h1></h1>
      </div>

      {/* <h2>Tratamentos de rosto </h2> */}

      {info === true && (
        <section className="valores">
          <div className="discription">
            <p>Ácido Marcas Acne</p> <p>{v40}</p>
          </div>
          <div className="discription">
            <p>Ácido Pele Sensível</p> <p>{v40}</p>
          </div>
          <div className="discription">
            <p>Ácidos Manchas</p> <p>{v40}</p>
          </div>
          <div className="discription">
            <p>Ácido Redução Rugas</p> <p>{v40}</p>
          </div>
          <div className="discription">
            <p>Fibroína de Seda</p> <p>{v60}</p>
          </div>
          <h2>Packs</h2>

          <div className="discription">
            <p>Fibroína de Seda 3 sessões</p> <p>{v150}</p>
          </div>
          <div className="discription">
            <p>Manutenção com Mãos de Seda</p> <p>{v27}</p>
          </div>
          <div className="discription">
            <p>Verniz de gel com Mãos de Seda</p> <p>{v20}</p>
          </div>
          <div className="discription">
            <p>Pedicure completa com Verniz de gel</p> <p>{v25}</p>
          </div>
          <div className="discription">
            <p>Pedicure normal com Verniz de gel</p> <p>{v18}</p>
          </div>
          <div className="discription">
            <p>Hidrolinfa Pack de 10</p> <p>{v100} Válidade 3 meses</p>
          </div>
          <div className="discription">
            <p>Terapêutica zona 40' Pack de 3</p> <p>{v80}</p>
          </div>
          <div className="discription">
            <p>Massagem de relaxamento Pack de 3</p> <p>{v99}</p>
          </div>
          <div className="discription">
            <p>Barra de Acess Pack de 5</p> <p>{v275}</p>
          </div>
        </section>
      )}

      {info === true && (
        <section className="valores">
          <div className="discription">
            <p>Osteopatia</p> <p>{v45}</p>
          </div>
          <div className="discription">
            <p>Osteopatia Pediátrica</p> <p>{v45}</p>
          </div>
          <div className="discription">
            <p>Massoterapia</p> <p>{v45}</p>
          </div>
          <div className="discription">
            <p>Terapia Sacrocraniana</p> <p>{v40}</p>
          </div>
          <h2>Harmonização Facial</h2>

          <div className="discription">
            <p>Full Face (4 zonas)</p> <p>{v250}</p>
          </div>

          <div className="discription">
            <p>Full Face (1 zona)</p> <p>{v150}</p>
          </div>
          <h2>Ácido Hilurónico</h2>

          <div className="discription">
            <p>1 Seringa 1ml</p> <p>{v200}</p>
          </div>
          <div className="discription">
            <p>Verniz de gel com Mãos de Seda</p> <p>{v20}</p>
          </div>
          <div className="discription">
            <p>Pedicure completa com Verniz de gel</p> <p>{v25}</p>
          </div>
          <div className="discription">
            <p>Pedicure normal com Verniz de gel</p> <p>{v18}</p>
          </div>
          <div className="discription">
            <p>Hidrolinfa Pack de 10</p> <p>{v100} Válidade 3 meses</p>
          </div>
          <div className="discription">
            <p>Terapêutica zona 40' Pack de 3</p> <p>{v80}</p>
          </div>
          <div className="discription">
            <p>Massagem de relaxamento Pack de 3</p> <p>{v99}</p>
          </div>
          <div className="discription">
            <p>Barra de Acess Pack de 5</p> <p>{v275}</p>
          </div>
        </section>
      )}
    </div>
  );
}

export default Div;
