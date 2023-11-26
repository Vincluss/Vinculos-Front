import Style from "../css/candidato.module.css";

export default function Candidato() {
  return (
    <section className={Style.container}>
      <form  className={Style.caixa_grande}>
      <div>
        <label>
          Por favor, coloque o upload do laudo da sua deficiência <br /> <br />
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="termosDeUso"
        />
        <label htmlFor="termosDeUso">
          Li e aceito os{' '}
          <a href="/termos-de-uso" target="_blank">
            termos de uso
          </a>
          .
        </label>
      </div>

      
      <button type="submit">Enviar</button>
    </form>
    </section>
  );
}
