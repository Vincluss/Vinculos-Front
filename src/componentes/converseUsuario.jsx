import Style from "../css/converseUsuario.module.css";

export default function Convuser() {
  return (
    <section className={Style.containerForms}>
      <form action="" className={Style.forms}>
        <label htmlFor="nome" className={Style.tituloForms}>
          Converse Com o usuário
        </label>

        <div className={`${Style.posicionarInput}`}>
          <label htmlFor="nome" className={Style.labelNome}>
            Nome
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Nome"
              className={Style.input}
            />
          </label>
          <label htmlFor="sobrenome" className={Style.labelNome}>
            Sobrenome
            <input
              type="text"
              name="sobrenome"
              id="sobrenome"
              placeholder="Sobrenome"
              className={Style.input}
            />
          </label>
        </div>

        <label htmlFor="cargo">Cargo</label>
        <input
          type="text"
          id="cargo"
          name="cargo"
          placeholder="Cargo"
          className={Style.estilizacaoInput}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={Style.estilizacaoInput}
        />

        <label htmlFor="telefone">Telefone</label>
        <input
          type="tel"
          name="telefone"
          id="telefone"
          placeholder="Telefone"
          className={Style.estilizacaoInput}
        />

        <label htmlFor="comentario">Pergunta/Comentário</label>
        <textarea
          name="comentario"
          id="comentario"
          cols="30"
          rows="10"
          placeholder="Pergunta/Comentário"
          className={Style.estilizacaoInput}
        ></textarea>
        <div className={Style.btnContainer}>
          <button type="submit" className={Style.btnContato}>
            Receber Contato
          </button>
        </div>
      </form>
    </section>
  );
}
