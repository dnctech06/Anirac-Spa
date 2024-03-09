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
    <div className="Full_service_div3" onClick={InfoOn}>
      <div className="Title_FullBody">
        <h1>Mãos</h1>
        <h1>Pés</h1>
        <h1>Rostos</h1>
        <h1></h1>
      </div>

      
      {info === true && (
        <section className="valores">
          {/* MASSAGENS */}
          <h2>Massagens</h2>

          <div className="discription">
            <p>Terapêutica zona 40'</p> <pre> </pre> <p>{v30}</p>
          </div>
          <div className="discription">
            <p>Relaxamento 45'</p>
            <pre> </pre> <p>{v35}</p>
          </div>
          <div className="discription">
            <p>Tui-na zona 40'</p> <pre> </pre> <p>{v40}</p>
          </div>
          <div className="discription">
            <p>Lomi Lomi 60'</p>
            <pre> </pre> <p>{v45}</p>
          </div>
          <div className="discription">
            <p>Californiana 45'</p>
            <pre> </pre> <p>{v35}</p>
          </div>
          <div className="discription">
            <p>Indian Head Massagem 40'</p>
            <pre> </pre> <p>{v35}</p>
          </div>
          <div className="discription">
            <p>Thai Yoga Massage 50</p> <pre> </pre> <p>{v50}</p>
          </div>
          <div className="discription">
            <p>Shiatsu 1ª sessão 90'</p> <pre> </pre> <p>{v60}</p>
          </div>
          <div className="discription">
            <p>Shiatsu sessões seguintes 45'</p> <pre> </pre> <p>{v35}</p>
          </div>
          <div className="discription">
            <p>Massagem a 4 mãos 30 </p> <pre> </pre> <p>{v50}</p>
          </div>
          <div className="discription">
            <p>Massagem Relaxante a Dois 50'</p> <pre> </pre> <p>{v80}</p>
          </div>
          <div className="discription">
            <p>Massagem Lomi-Lomi a Dois 60'</p> <pre> </pre> <p>{v95}</p>
          </div>

      {/* Tratamento Corpo*/}

          <h2>Tratamento Corpo</h2>
          <div className="discription">
            <p>Drenagem Lintática 60'</p>
            <pre> </pre> <p>{v40}</p>
          </div>
          <div className="discription">
            <p>Drenagem Lintática Zona 35'</p> <pre> </pre> <p>{v20}</p>
          </div>
          <div className="discription">
            <p>Massagem Facial Drenante 25'</p>
            <pre> </pre> <p>{v15}</p>
          </div>
          <div className="discription">
            <p>Massagem Silhueta Zona 35'</p> <pre> </pre> <p>{v25}</p>
          </div>
          <div className="discription">
            <p>Esfoliação Corporal/ Hidratação 50'</p>
            <pre> </pre> <p>{v35}</p>
          </div>
          <div className="discription">
            <p>Tratamento anti celulitico Anirac 60'</p>
            <pre> </pre> <p>{v45}</p>
          </div>
          <div className="discription">
            <p>Tratamentos Pernas Cansadas 40'</p>
            <pre> </pre> <p>{v30}</p>
          </div>
          <div className="discription">
            <p>Rosto Completo</p>
            <pre> </pre> <p>{v55}</p>
          </div>
          <div className="discription">
            <p>Retlexologia Auricular - A partir de</p>
            <pre> </pre> <p>{v5}</p>
          </div>
          <div className="discription">
            <p>Bandas neuromusculares - A partir de</p>
            <pre> </pre> <p>{v5}</p>
          </div>
        </section>
      )}

      {info === true && (
        <section className="valores">
          <h2>Mãos</h2>
          <div className="discription">
            <p>Gel com Extensão Pequeno</p>
            <pre> </pre> <p>{v25}</p>
          </div>
          <div className="discription">
            <p>Gel com Extensão Grande</p> <pre> </pre> <p>{v27}</p>
          </div>
          <div className="discription">
            <p>Manutenção Gel Pequeno</p> <pre> </pre> <p>{v19}</p>
          </div>
          <div className="discription">
            <p>Manutenção Gel Grande</p> <pre> </pre> <p>{v21}</p>
          </div>
          <div className="discription">
            <p>Verniz de gel</p> <pre> </pre> <p>{v13}</p>
          </div>
          <div className="discription">
            <p>Remoção de gel</p>
            <pre> </pre> <p>{v8}</p>
          </div>
          <div className="discription">
            <p>Mãos de Seda</p> <pre> </pre> <p>{v10}</p>
          </div>
          <div className="discription">
            <p>Arranjo de uma Unha</p> <pre> </pre> <p>{v0150}</p>
          </div>
          {/* pés */}
          <h2>Pés</h2>
          <div className="discription">
            <p>Ritual pés Anirac</p>
            <pre> </pre> <p>{v25}</p>
          </div>
          <div className="discription">
            <p>Hidrolinfa</p> <pre> </pre> <p>{v14}</p>
          </div>
          <div className="discription">
            <p>Pedicure completa</p> <pre> </pre> <p>{v18}</p>
          </div>
          <div className="discription">
            <p>Pedicure Normal</p>
            <pre> </pre> <p>{v10}</p>
          </div>
          <div className="discription">
            <p>Verniz de Gel nos Pés</p> <pre> </pre> <p>{v10}</p>
          </div>
          <div className="discription">
            <p>Pedicure completa c/ Verniz Gel</p>
            <pre> </pre> <p>{v25}</p>
          </div>
        </section>
      )}

      {/* Sombrancelha */}

      {info === true && (
        <section className="valores">
          <h2>Epilação a Linha</h2>
          <div className="discription">
            <p>Sombrancelhas</p>
            <pre> </pre> <p>{v8}</p>
          </div>
          <div className="discription">
            <p>Buço</p>
            <pre> </pre> <p>{v4}</p>
          </div>
          <div className="discription">
            <p>Maças do Rosto</p>
            <pre> </pre> <p>{v7}</p>
          </div>
          <div className="discription">
            <p>Rosto Completo</p>
            <pre> </pre> <p>{v15}</p>
          </div>
          <div className="discription">
            <p>Coloração Henna</p>
            <pre> </pre> <p>{v8}</p>
          </div>
          <div className="discription">
            <p>Design e Sobrancelha</p> <pre> </pre> <p>{v13}</p>
          </div>
          <div className="discription">
            <p>Brow Lamination</p>
            <pre> </pre> <p>{v30}</p>
          </div>
          <div className="discription">
            <p>Lifting Pestanas</p> <pre> </pre> <p>{v25}</p>
          </div>
          {/* LIMPEZA DE PELE */}
          <h2>Limpeza de Pele</h2>

          <div className="discription">
            <p>Limpeza Pele Mini Faciar</p> <pre> </pre> <p>{v20}</p>
          </div>
          <div className="discription">
            <p>Limpeza Pele Normal </p> <pre> </pre> <p>{v30}</p>
          </div>
          <div className="discription">
            <p>Limpeza Pele Profunda</p> <pre> </pre> <p>{v40}</p>
          </div>
        </section>
      )}


    </div>
  );
}

export default Div;
