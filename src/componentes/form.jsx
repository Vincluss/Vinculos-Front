import Style from "../css/form.module.css";

export default function Form() {
  return (
    <section className={Style.container}>
      <form className={Style.caixa_pequena1}>
        {/* ... outros campos ... */}

        <label>
          Cargo <br />
          <input type="text" className={Style.inputStyle} />
        </label>

        <label>
          Cidade <br />
          <input type="text" className={Style.inputStyle} />
        </label>

        <label>
          Salário <br />
          <input type="text" className={Style.inputStyle} />
        </label>

        <label>
        Área de atuação:
          <input type="text" className={Style.inputStyle} />
        </label>

        <label>Modelo de trabalho:</label>
        <select>
          <option value="">Selecione...</option>
          <option value="presencial">Presencial</option>
          <option value="remoto">Remoto</option>
          <option value="hibrido">Hibrido</option>
        </select> <br />

        <button className={Style.botao_filtar}> 
          Filtar
        </button>

      </form>
    </section>
  );
}
