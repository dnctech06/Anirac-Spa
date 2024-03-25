import { useState } from "react";
import style from "./style.css";
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

  function InfoOff() {
    setInfo(false);
  }

  return (
    <div className="Full_service" onClick={InfoOn}>
      <div className="Title_FullBody">
        <h1>Cuidados</h1>
        <h1>Corpo </h1>
        <h1>Completo </h1>
      </div>

      {/* <h2>Tratamentos de rosto </h2> */}

      {info === true && (
        <section className="valores">
          <h2>Tratamentos de Rosto</h2>

          <div className="discription">
            <p>Ácido Marcas Acne</p> <pre> </pre> <p> {Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Ácido Pele Sensível</p> <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Ácidos Manchas</p>
            <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Ácido Redução Rugas</p> <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Fibroína de Seda</p> <pre> </pre> <p>{Valores.v60}</p>
          </div>
          <h2>Packs</h2>

          <div className="discription">
            <p>Fibroína de Seda 3 sessões</p>
            <pre> </pre> <p>{Valores.v150}</p>
          </div>
          <div className="discription">
            <p>Manutenção com Mãos de Seda</p> <pre> </pre> <p>{Valores.v27}</p>
          </div>
          <div className="discription">
            <p>Verniz de gel com Mãos de Seda</p> <pre> </pre> <p>{Valores.v20}</p>
          </div>
          <div className="discription">
            <p>Pedicure completa com Verniz de gel</p>
            <pre> </pre> <p>{Valores.v25}</p>
          </div>
          <div className="discription">
            <p>Pedicure normal com Verniz de gel</p>
            <pre> </pre> <p>{Valores.v18}</p>
          </div>
          <div className="discription">
            <p>Hidrolinfa Pack de 10</p>
            <pre> </pre> <p>{Valores.v100} Válidade 3 meses</p>
          </div>
          <div className="discription">
            <p>Terapêutica zona 40' Pack de 3</p> <pre> </pre> <p>{Valores.v80}</p>
          </div>
          <div className="discription">
            <p>Massagem de relaxamento Pack de 3</p> <pre> </pre> <p>{Valores.v99}</p>
          </div>
          <div className="discription">
            <p>Barra de Acess Pack de 5</p> <pre> </pre> <p>{Valores.v275}</p>
          </div>
        </section>
      )}

      {info === true && (
        <section className="valores">
          <div className="discription">
            <p>Osteopatia</p> <pre> </pre> <p>{Valores.v45}</p>
          </div>
          <div className="discription">
            <p>Osteopatia Pediátrica</p> <pre> </pre> <p>{Valores.v45}</p>
          </div>
          <div className="discription">
            <p>Massoterapia</p>
            <pre> </pre> <p>{Valores.v45}</p>
          </div>
          <div className="discription">
            <p>Terapia Sacrocraniana</p> <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <h2>Harmonização Facial</h2>

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
    </div>
  );
}

export default Div;
