import Style from "@/src/css/formularioRH.module.css";

export default function FormularioRH() {
  return (
    <section className={Style.containerForms}>
      <form action="" className={Style.forms}>
        <label htmlFor="" className={Style.tituloForms}>
          Converse Com RH
        </label>

        <div className={Style.posicionarInput}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Nome"
            className={Style.input}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Sobrenome"
            className={Style.input}
          />
        </div>

        <input
          type="text"
          id="nomeEmpresa"
          name="nomeEmpresa"
          placeholder="Empresa"
          className={Style.estilizacaoInput}
        />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={Style.estilizacaoInput}
        />

        <input
          type="tel"
          name=""
          id=""
          placeholder="Telefone"
          className={Style.estilizacaoInput}
        />

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Pergunta/Comentário"
          className={Style.estilizacaoInput}
        ></textarea>
      </form>

      <button type="submit" className={Style.btnContato}>
        Receber Contato
      </button>
    </section>
  );
}
