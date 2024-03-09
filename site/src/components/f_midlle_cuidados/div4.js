import { useState } from "react";

import style from "./style.css";
import Massagem from "../../assets/img/espaco/linda-loira-recebendo-uma-massagem.jpg";

const v0150 = " - 1,50€";
const v4 = " - 4,00€";
const v5 = " - 5,00€";
const v7 = " - 7,00€";

const v8 = " - 8,00€";

const v10 = " - 10,00€";

const v13 = " - 13,00€";
const v14 = " - 14,00€";
const v15 = " - 15,00€ / fio";
const v18 = " - 18,00€";
const v19 = " - 19,00€";
const v20 = " - 20,00€";
const v21 = " - 21,00€";
const v25 = " - 25,00€";
const v27 = " - 27,00€";
const v30 = " - 30,00€";
const v35 = " - 30,00€";
const v40 = " - 40,00€";
const v45 = " - 45,00€";
const v50 = " - 50,00€";
const v55 = " - 55,00€";
const v60 = " - 60,00€";
const v65 = " - 65,00€";
const v75 = " - 75,00€ / fio";
const v80 = " - 80,00€";
const v95 = " - 95,00€";
const v99 = " - 99,00€";
const v100 = " - 100,00€";
const v120 = " - v120,00€";
const v150 = " - 150,00€";
const v200 = " - 200,00€";
const v250 = " - 250,00€";
const v275 = " - 275,00€";
const v400 = " - 400,00€";
const v450 = " - 450,00€";

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
            <p>Mesa Radiônica</p> <pre> </pre> <p>{v40}</p>
          </div>
          <div className="discription">
            <p>Hipnoterapia</p>
            <pre> </pre> <p>{v60}</p>
          </div>
        </section>
      )}

          {/* MASSAGENS */}

      {info === true && (
        <section className="valores">


          <h2>Massagens</h2>

          <div className="discription">
            <p>Corpo Mente e Alma 120'</p> <pre> </pre> <p>{v100}</p>
          </div>
          <div className="discription">
            <p>Alma Revitalizada 70'</p>
            <pre> </pre> <p>{v75}</p>
          </div>
          <div className="discription">
            <p>Toque Terapêutio 60'</p>
            <pre> </pre> <p>{v60}</p>
          </div>
          <div className="discription">
            <p>Barras Access</p>
            <pre> </pre> <p>{v60}</p>
          </div>

          <div className="discription">
            <p>info gerais</p> <pre> </pre> <p>{v50}</p>
          </div>
        </section>
      )}
    </div>
  );
}

export default Div;
