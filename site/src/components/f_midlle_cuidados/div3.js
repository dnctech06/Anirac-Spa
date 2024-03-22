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
            <p>Terapêutica zona 40'</p> <pre> </pre> <p>{Valores.v30}</p>
          </div>
          <div className="discription">
            <p>Relaxamento 45'</p>
            <pre> </pre> <p>{Valores.v35}</p>
          </div>
          <div className="discription">
            <p>Tui-na zona 40'</p> <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Lomi Lomi 60'</p>
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
            <p>Thai Yoga Massage 50</p> <pre> </pre> <p>{Valores.v50}</p>
          </div>
          <div className="discription">
            <p>Shiatsu 1ª sessão 90'</p> <pre> </pre> <p>{Valores.v60}</p>
          </div>
          <div className="discription">
            <p>Shiatsu sessões seguintes 45'</p> <pre> </pre> <p>{Valores.v35}</p>
          </div>
          <div className="discription">
            <p>Massagem a 4 mãos 30 </p> <pre> </pre> <p>{Valores.v50}</p>
          </div>
          <div className="discription">
            <p>Massagem Relaxante a Dois 50'</p> <pre> </pre> <p>{Valores.v80}</p>
          </div>
          <div className="discription">
            <p>Massagem Lomi-Lomi a Dois 60'</p> <pre> </pre> <p>{Valores.v95}</p>
          </div>

      {/* Tratamento Corpo*/}

          <h2>Tratamento Corpo</h2>
          <div className="discription">
            <p>Drenagem Lintática 60'</p>
            <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Drenagem Lintática Zona 35'</p> <pre> </pre> <p>{Valores.v20}</p>
          </div>
          <div className="discription">
            <p>Massagem Facial Drenante 25'</p>
            <pre> </pre> <p>{Valores.v15}</p>
          </div>
          <div className="discription">
            <p>Massagem Silhueta Zona 35'</p> <pre> </pre> <p>{Valores.v25}</p>
          </div>
          <div className="discription">
            <p>Esfoliação Corporal/ Hidratação 50'</p>
            <pre> </pre> <p>{Valores.v35}</p>
          </div>
          <div className="discription">
            <p>Tratamento anti celulitico Anirac 60'</p>
            <pre> </pre> <p>{Valores.v45}</p>
          </div>
          <div className="discription">
            <p>Tratamentos Pernas Cansadas 40'</p>
            <pre> </pre> <p>{Valores.v30}</p>
          </div>
          <div className="discription">
            <p>Rosto Completo</p>
            <pre> </pre> <p>{Valores.v55}</p>
          </div>
          <div className="discription">
            <p>Retlexologia Auricular - A partir de</p>
            <pre> </pre> <p>{Valores.v5}</p>
          </div>
          <div className="discription">
            <p>Bandas neuromusculares - A partir de</p>
            <pre> </pre> <p>{Valores.v5}</p>
          </div>
        </section>
      )}

      {info === true && (
        <section className="valores">
          <h2>Mãos</h2>
          <div className="discription">
            <p>Gel com Extensão Pequeno</p>
            <pre> </pre> <p>{Valores.v25}</p>
          </div>
          <div className="discription">
            <p>Gel com Extensão Grande</p> <pre> </pre> <p>{Valores.v27}</p>
          </div>
          <div className="discription">
            <p>Manutenção Gel Pequeno</p> <pre> </pre> <p>{Valores.v19}</p>
          </div>
          <div className="discription">
            <p>Manutenção Gel Grande</p> <pre> </pre> <p>{Valores.v21}</p>
          </div>
          <div className="discription">
            <p>Verniz de gel</p> <pre> </pre> <p>{Valores.v13}</p>
          </div>
          <div className="discription">
            <p>Remoção de gel</p>
            <pre> </pre> <p>{Valores.v8}</p>
          </div>
          <div className="discription">
            <p>Mãos de Seda</p> <pre> </pre> <p>{Valores.v10}</p>
          </div>
          <div className="discription">
            <p>Arranjo de uma Unha</p> <pre> </pre> <p>{Valores.v0150}</p>
          </div>
          {/* pés */}
          <h2>Pés</h2>
          <div className="discription">
            <p>Ritual pés Anirac</p>
            <pre> </pre> <p>{Valores.v25}</p>
          </div>
          <div className="discription">
            <p>Hidrolinfa</p> <pre> </pre> <p>{Valores.v14}</p>
          </div>
          <div className="discription">
            <p>Pedicure completa</p> <pre> </pre> <p>{Valores.v18}</p>
          </div>
          <div className="discription">
            <p>Pedicure Normal</p>
            <pre> </pre> <p>{Valores.v10}</p>
          </div>
          <div className="discription">
            <p>Verniz de Gel nos Pés</p> <pre> </pre> <p>{Valores.v10}</p>
          </div>
          <div className="discription">
            <p>Pedicure completa c/ Verniz Gel</p>
            <pre> </pre> <p>{Valores.v25}</p>
          </div>
        </section>
      )}

      {/* Sombrancelha */}

      {info === true && (
        <section className="valores">
          <h2>Epilação a Linha</h2>
          <div className="discription">
            <p>Sombrancelhas</p>
            <pre> </pre> <p>{Valores.v8}</p>
          </div>
          <div className="discription">
            <p>Buço</p>
            <pre> </pre> <p>{Valores.v4}</p>
          </div>
          <div className="discription">
            <p>Maças do Rosto</p>
            <pre> </pre> <p>{Valores.v7}</p>
          </div>
          <div className="discription">
            <p>Rosto Completo</p>
            <pre> </pre> <p>{Valores.v15}</p>
          </div>
          <div className="discription">
            <p>Coloração Henna</p>
            <pre> </pre> <p>{Valores.v8}</p>
          </div>
          <div className="discription">
            <p>Design e Sobrancelha</p> <pre> </pre> <p>{Valores.v13}</p>
          </div>
          <div className="discription">
            <p>Brow Lamination</p>
            <pre> </pre> <p>{Valores.v30}</p>
          </div>
          <div className="discription">
            <p>Lifting Pestanas</p> <pre> </pre> <p>{Valores.v25}</p>
          </div>
          {/* LIMPEZA DE PELE */}
          <h2>Limpeza de Pele</h2>

          <div className="discription">
            <p>Limpeza Pele Mini Faciar</p> <pre> </pre> <p>{Valores.v20}</p>
          </div>
          <div className="discription">
            <p>Limpeza Pele Normal </p> <pre> </pre> <p>{Valores.v30}</p>
          </div>
          <div className="discription">
            <p>Limpeza Pele Profunda</p> <pre> </pre> <p>{Valores.v40}</p>
          </div>
        </section>
      )}


    </div>
  );
}

export default Div;
