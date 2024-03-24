import { useForm, ValidationError } from "@formspree/react";
import styleForm from './styleForm.css';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xvoeqqpv");
  if (state.succeeded) {
      return <p className="msn_send" >Menssagem enviada! <br/> 
        Aguande nosso retorno!</p>;
  }

  return (
    <form  className="Form_full_call" onSubmit={handleSubmit}>
     
      <label htmlFor="nome">Nome*</label>
      <input required placeholder="nome..." id="nome" type="nome" name="nome" />

      <label htmlFor="email">E-mail*</label>
      <input required placeholder="exemple@email.com" id="email" type="email" name="email" autocomplete="email" />

      <label htmlFor="telefone">Telefone</label>
      <input  placeholder="___-___-___" id="telefone" type="telefone" name="telefone" />

     
        <h4 className="TitleDB">Dúvidas ou Sugestões*</h4>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea required className="txt_areaCall" placeholder="partilhe aqui a sua dúvida ou sugestão..." id="ds" name="ds" />
      <ValidationError prefix="ds" field="ds" errors={state.errors} />
      <button className="btn" type="submit" disabled={state.submitting}>
        ENVIAR
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}