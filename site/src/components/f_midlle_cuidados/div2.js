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

  return (
    <div className="Full_service_div2" onClick={InfoOn}>
      <div className="Title_FullBody">
        <h1>Cuidados</h1>
        <h1>Laser</h1>
        <h1>System</h1>
      </div>
      {/* HOMEM */}
      {info === true && (
        <section className="valores">
          <h2>Depilação Laser System</h2>
          <h4>Homem</h4>
          <div className="discription">
            <p>Entre Sobrancelhas</p>
            <pre> </pre> <p>{Valores.v15}</p>
          </div>
          <div className="discription">
            <p>Maças do Rosto</p> <pre> </pre> <p>{Valores.v20}</p>
          </div>
          <div className="discription">
            <p>Patilhas</p>
            <pre> </pre> <p>{Valores.v20}</p>
          </div>
          <div className="discription">
            <p>Orelhas</p> <pre> </pre> <p>{Valores.v15}</p>
          </div>
          <div className="discription">
            <p>Narinas</p>
            <pre> </pre> <p>{Valores.v15}</p>
          </div>
          <div className="discription">
            <p>Bigode </p>
            <pre> </pre> <p>{Valores.v20}</p>
          </div>
          <div className="discription">
            <p>Pescoço Trás ou Frente</p>
            <pre> </pre> <p>{Valores.v25}</p>
          </div>
          <div className="discription">
            <p>Rosto Completo</p>
            <pre> </pre> <p>{Valores.v55}</p>
          </div>
          <div className="discription">
            <p>Axilas</p>
            <pre> </pre> <p>{Valores.v30}</p>
          </div>
          <div className="discription">
            <p>Ombros</p>
            <pre> </pre> <p>{Valores.v30}</p>
          </div>
          <div className="discription">
            <p>Dorsal</p>
            <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Lombar</p> <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Costas Completas</p> <pre> </pre> <p>{Valores.v75}</p>
          </div>
          <div className="discription">
            <p>Tórax</p> <pre> </pre> <p>{Valores.v50}</p>
          </div>
          <div className="discription">
            <p>Abdómen</p> <pre> </pre> <p>{Valores.v50}</p>
          </div>
          <div className="discription">
            <p>Linha Alba ou Umbigo</p> <pre> </pre> <p>{Valores.v20}</p>
          </div>
          <div className="discription">
            <p>Braços</p> <pre> </pre> <p>{Valores.v50}</p>
          </div>
          <div className="discription">
            <p>Mãos</p> <pre> </pre> <p>{Valores.v20}</p>
          </div>
          <div className="discription">
            <p>Pernas Superior ou Inferior</p> <pre> </pre> <p>{Valores.v75}</p>
          </div>
          <div className="discription">
            <p>Pernas Completas</p> <pre> </pre> <p>{Valores.v120}</p>
          </div>
          <div className="discription">
            <p>Virilhas</p> <pre> </pre> <p>{Valores.v50}</p>
          </div>
          <div className="discription">
            <p>Glúteos + Zona Perianal</p>
            <pre> </pre> <p>{Valores.v60}</p>
          </div>
          <div className="discription">
            <p>Zona Perianal</p>
            <pre> </pre> <p>{Valores.v35}</p>
          </div>
          <div className="discription">
            <p>Pés</p> <pre> </pre> <p>{Valores.v20}</p>
          </div>
        </section>
      )}
      {/* MULHER */}
      {info === true && (
        <section className="valores">
          <h2>Depilação Laser System</h2>
          <h4>Mulher</h4>
          <div className="discription">
            <p>Buço</p>
            <pre> </pre> <p>{Valores.v14}</p>
          </div>
          <div className="discription">
            <p>Entre Sobrancelhas</p>
            <pre> </pre> <p>{Valores.v14}</p>
          </div>
          <div className="discription">
            <p>Magas do Rosto</p>
            <pre> </pre> <p>{Valores.v15}</p>
          </div>
          <div className="discription">
            <p>Patilhas</p>
            <pre> </pre> <p>{Valores.v15}</p>
          </div>
          <div className="discription">
            <p>Face Lateral</p> <pre> </pre> <p>{Valores.v25}</p>
          </div>
          <div className="discription">
            <p>Queixo </p> <pre> </pre> <p>{Valores.v15}</p>
          </div>
          <div className="discription">
            <p>Rosto Total</p>
            <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Colo </p> <pre> </pre> <p>{Valores.v20}</p>
          </div>
          <div className="discription">
            <p>Axilas</p> <pre> </pre> <p>{Valores.v30}</p>
          </div>
          <div className="discription">
            <p>Mamilos </p> <pre> </pre> <p>{Valores.v15}</p>
          </div>
          <div className="discription">
            <p>Umbigo</p> <pre> </pre> <p>{Valores.v15}</p>
          </div>
          <div className="discription">
            <p>Barriga</p> <pre> </pre> <p>{Valores.v30}</p>
          </div>
          <div className="discription">
            <p>Linha Alba</p>
            <pre> </pre> <p>{Valores.v15}</p>
          </div>
          <div className="discription">
            <p>Zona Lombar</p> <pre> </pre> <p>{Valores.v30}</p>
          </div>
          <div className="discription">
            <p>Braços</p>
            <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Maõs ou Pés</p>
            <pre> </pre> <p>{Valores.v20}</p>
          </div>
          <div className="discription">
            <p>Glúteos + Zona Perianal</p>
            <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Zona Perianal </p> <pre> </pre> <p>{Valores.v25}</p>
          </div>
          <div className="discription">
            <p>Pernas Superior ou Inferior</p> <pre> </pre> <p>{Valores.v60}</p>
          </div>
          <div className="discription">
            <p>Pernas Completas</p> <pre> </pre> <p>{Valores.v95}</p>
          </div>
          <div className="discription">
            <p>Virilha Total</p> <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Linha do Biquini</p> <pre> </pre> <p>{Valores.v30}</p>
          </div>
        </section>
      )}
      {info === true && (
        <section className="valores">
          <h2>Depilação Laser System</h2>
          <h4>Radiofrequência</h4>
          <div className="discription">
            <p>Rosto</p>
            <pre> </pre> <p>{Valores.v50}</p>
          </div>
          <div className="discription">
            <p>Pescoço</p> <pre> </pre> <p>{Valores.v25}</p>
          </div>
          <div className="discription">
            <p>Colo</p> <pre> </pre> <p>{Valores.v30}</p>
          </div>
          <div className="discription">
            <p>Dorsal</p> <pre> </pre> <p>{Valores.v35}</p>
          </div>
          <div className="discription">
            <p>Abdómen</p> <pre> </pre> <p>{Valores.v60}</p>
          </div>
          <div className="discription">
            <p>Flancos</p>
            <pre> </pre> <p>{Valores.v30}</p>
          </div>
          <div className="discription">
            <p>Braços</p> <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Mãos</p> <pre> </pre> <p>{Valores.v20}</p>
          </div>
          <div className="discription">
            <p>Pernas (Coxas)</p>
            <pre> </pre> <p>{Valores.v65}</p>
          </div>
          <div className="discription">
            <p>Joelhos</p> <pre> </pre> <p>{Valores.v25}</p>
          </div>
          <div className="discription">
            <p>Glúteos</p> <pre> </pre> <p>{Valores.v45}</p>
          </div>
          {/* Rejuvenescimento */}
          <h2>Laser System</h2>
          <h4>Rejuvenescimento</h4>
          <div className="discription">
            <p>Rosto</p>
            <pre> </pre> <p>{Valores.v40}</p>
          </div>
          <div className="discription">
            <p>Colo</p> <pre> </pre> <p>{Valores.v35}</p>
          </div>
          <div className="discription">
            <p>Mãos</p>
            <pre> </pre> <p>{Valores.v30}</p>
          </div>
          {/* PÈS */}
          <h2>Laser System</h2>
          <h4>Pedicure</h4>
          <div className="discription">
            <p>Sessão 2 pés</p>
            <pre> </pre> <p>{Valores.v50}</p>
          </div>
        </section>
      )}
    </div>
  );
}

export default Div;
