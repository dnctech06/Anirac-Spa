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
          <h2>Mãos</h2>
          <div className="discription">
            <p>Gel com Extensão</p>
            <pre> </pre> <p>{Valores.v25}</p>
          </div>
          <div className="discription">
            <p>Manutenção Gel</p> <pre> </pre> <p>{Valores.v19}</p>
          </div>
          <div className="discription">
            <p>Verniz de gel</p> <pre> </pre> <p>{Valores.v13}</p>
          </div>
          <div className="discription">
            <p>Manicure com Power Base</p> <pre> </pre> <p>{Valores.v13}</p>
          </div>
          <div className="discription">
            <p>Remoção</p>
            <pre> </pre> <p>{Valores.v8}</p>
          </div>
          <div className="discription">
            <p>Nail Art</p>
            <pre> </pre> <p>{Valores.v8}</p>
          </div>
          <div className="discription">
            <p>Arranjo de uma Unha</p> <pre> </pre> <p>{Valores.v0150}</p>
          </div>
          <div className="discription">
            <p>Manicure normal</p> <pre> </pre> <p>{Valores.v0150}</p>
          </div>
          <div className="discription">
            <p>Mãos de Seda Spa</p> <pre> </pre> <p>{Valores.v10}</p>
          </div>
          <div className="discription">
            <p>Manutenção gel c/ Mãos de Seda</p> <pre> </pre> <p>{Valores.v10}</p>
          </div>
          <div className="discription">
            <p>Verniz de gel c/ Mãos de Seda</p> <pre> </pre> <p>{Valores.v10}</p>
          </div>

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
            <p>Sobrancelha e Coloração</p> <pre> </pre> <p>{Valores.v13}</p>
          </div>
          <div className="discription">
            <p>Brow Lamination</p>
            <pre> </pre> <p>{Valores.v30}</p>
          </div>
          <div className="discription">
            <p>Lifting Pestanas</p> <pre> </pre> <p>{Valores.v25}</p>
          </div>
        </section>
      )}

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
          <div className="discription">
            <p>Fibroína de Seda 3 sessões</p>
            <pre> </pre> <p>{Valores.v150}</p>
          </div>
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
            <p>Ozonoterapia Podal</p>
            <pre> </pre> <p>{Valores.v10}</p>
          </div>
          <div className="discription">
            <p>Reconstrução de Unha</p>
            <pre> </pre> <p>{Valores.v10}</p>
          </div>
          <div className="discription">
            <p>Verniz de Gel nos Pés</p> <pre> </pre> <p>{Valores.v10}</p>
          </div>
          <div className="discription">
            <p>Pedicure Normal e completa c/ Verniz Gel</p>
            <pre> </pre> <p>{Valores.v25}</p>
          </div>
          <div className="discription">
            <p>Hidrolinfa Pack de 10</p>
            <pre> </pre> <p>{Valores.v25}</p>
          </div>
          
        </section>
      )}
    </div>
  );
}

export default Div;
