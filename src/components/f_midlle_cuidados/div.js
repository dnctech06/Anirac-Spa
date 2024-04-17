import { useState } from "react";
import style from "./style.css";
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

      {info === true && (
        <section className="valores">
          {/* LIMPEZA DE PELE */}
          <h2>Limpeza de Pele</h2>
          <div className="discription">
            <p>Limpeza Pele Mini Facial</p> <pre> </pre> <p>{Valores.v20}</p>
          </div>
          <div className="discription">
            <p>Limpeza Pele Normal </p> <pre> </pre> <p>{Valores.v30}</p>
          </div>
          <div className="discription">
            <p>Limpeza Pele Profunda</p> <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <h2>Massagens</h2>
          <div className="discription">
            <p>Terapêutica zona 40'</p> <pre> </pre> <p>{Valores.v30}</p>
          </div>
          <div className="discription">
            <p>Relaxamento 45'</p>
            <pre> </pre> <p>{Valores.v35}</p>
          </div>
          <div className="discription">
            <p>Lomi Lomi 70'</p>
            <pre> </pre> <p>{Valores.v45}</p>
          </div>
          <div className="discription">
            <p>Californiana 45'</p>
            <pre> </pre> <p>{Valores.v35}</p>
          </div>
          <div className="discription">
            <p>Indian Head Massagem 40'</p>
            <pre> </pre> <p>{Valores.v35}</p>
          </div>
          <div className="discription">
            <p>Thai Yoga Massage 50'</p> <pre> </pre> <p>{Valores.v50}</p>
          </div>
          <div className="discription">
            <p>Shiatsu 1ª sessão 90'</p> <pre> </pre> <p>{Valores.v60}</p>
          </div>
          <div className="discription">
            <p>Shiatsu sessões seguintes 45'</p> <pre> </pre>{" "}
            <p>{Valores.v35}</p>
          </div>
          <div className="discription">
            <p>Massagem a 4 mãos 30' </p> <pre> </pre> <p>{Valores.v50}</p>
          </div>
          <div className="discription">
            <p>Massagem Relaxante a Dois 50'</p> <pre> </pre>{" "}
            <p>{Valores.v80}</p>
          </div>
          <div className="discription">
            <p>Massagem Lomi-Lomi a Dois 70'</p> <pre> </pre>{" "}
            <p>{Valores.v95}</p>
          </div>
          <div className="discription">
            <p>Terapêutica zona 40’ Pack de 3</p> <pre> </pre>{" "}
            <p>{Valores.v95}</p>
          </div>
          <div className="discription">
            <p>Massagem de relaxamento Pack de 3</p> <pre> </pre>{" "}
            <p>{Valores.v95}</p>
          </div>
        </section>
      )}
      {info === true && (
        <section className="valores">
          <h2>Tratamento Corpo</h2>
          <div className="discription">
            <p>Drenagem Lintática 60'</p>
            <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Drenagem Lintática com Rosto 75'</p>
            <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Drenagem Lintática Zona 30'</p> <pre> </pre> <p>{Valores.v20}</p>
          </div>
          <div className="discription">
            <p>Massagem Facial Drenante 20'</p>
            <pre> </pre> <p>{Valores.v15}</p>
          </div>
          <div className="discription">
            <p>Massagem Silhueta Zona 35'</p> <pre> </pre> <p>{Valores.v25}</p>
          </div>
          <div className="discription">
            <p>Tratamentos Pernas Cansadas 40'</p>
            <pre> </pre> <p>{Valores.v30}</p>
          </div>
          <div className="discription">
            <p>Reflexologia Auricular </p>
            <pre> </pre> <p>{Valores.v5}</p>
          </div>
          <div className="discription">
            <p>Bandas neuromusculares </p>
            <pre> </pre> <p>{Valores.v5}</p>
          </div>    
          <h2>Mental</h2>
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
            <p>Barras Access 70'</p>
            <pre> </pre> <p>{Valores.v60}</p>
          </div>
          <div className="discription">
            <p>Reiki Uchu Tekina 50'</p>
            <pre> </pre> <p>{Valores.v60}</p>
          </div>
          <div className="discription">
            <p>Barras de Access Pack 5</p>
            <pre> </pre> <p>{Valores.v60}</p>
          </div>
          <div className="discription">
            <p>Reiki Uchu Tekina Pack 5</p>
            <pre> </pre> <p>{Valores.v60}</p>
          </div>
        </section>
      )}
    </div>
  );
}

export default Div;
