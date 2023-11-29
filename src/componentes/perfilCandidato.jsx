import Style from "../css/candidato.module.css";

export default function Perfil() {
  return (
    <>
      <h2 className={Style.titulo_form}>Perfil do Candidato</h2>
      <section className={Style.container}>
        <form className={Style.caixa_grande}>
          <div>
            <label className={Style.label}>Email:
              Por favor, coloque o upload do laudo da sua deficiência
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
              />
            </label>
          </div>
          <div>
            <label className={Style.label}>Email:
            <input
              type="checkbox"
              id="termosDeUso"
            />
            </label>
            <label htmlFor="termosDeUso">
              Li e aceito os{' '}
              <a href="/termos-de-uso" target="_blank">
                termos de uso
              </a>
              .
            </label>
          </div>

          <button className={Style.enviar} type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
}
