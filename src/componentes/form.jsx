import Style from "../css/form.module.css";

export default function Form() {
  return (
    <section className={Style.container}>
      <form className={Style.caixa_pequena1}>
        {/* ... outros campos ... */}

        <label className={Style.label}>
          Empresa:
          <input type="text" placeholder="digite nome da empresa" className={Style.inputStyle} />
        </label>

        <label className={Style.label}>
          Cargo:
          <input type="text" placeholder="digite numero da vaga" className={Style.inputStyle} />
        </label>

        <label className={Style.label}>
          Região:
          <input type="text" placeholder="exemplo: zona oeste" className={Style.inputStyle} />
        </label>

        <label className={Style.label}>
          Salário:
          <input type="text" placeholder="R$0,000" className={Style.inputStyle} />
        </label>

        <label className={Style.label}>
        Área de atuação:
          <input type="text" placeholder="digite a área que deseja" className={Style.inputStyle} />
        </label>

        <label className={Style.label}>Modelo de trabalho:
          <select>
            <option value="">Selecione...</option>
            <option value="presencial">Presencial</option>
            <option value="remoto">Remoto</option>
            <option value="hibrido">Hibrido</option>
          </select> 

        </label>
        

        <button className={Style.botao_filtar}> 
          Filtrar
        </button>

      </form>
    </section>
  );
}
