import Style from "../css/form.module.css";

export default function Form() {
  return (
    <div className={Style.formContainer}>
      <h2 className={Style.formTitle}>Vagas</h2>
      <section className={Style.formSection}>
        <form className={Style.formBox}>

          {['Empresa', 'Cargo', 'Região', 'Salário', 'Área de atuação'].map((label, index) => (
            <div key={index} className={Style.formGroup}>
              <label className={Style.formLabel}>
                <span className={Style.labelText}>{label}:</span>
                <input type="text" placeholder={`Digite ${label.toLowerCase()}`} className={Style.formInput} aria-label={label} />
              </label>
            </div>
          ))}

          <div className={Style.formGroup}>
            <label className={Style.formLabel}>
              <span className={Style.labelText}>Modelo de trabalho:</span>
              <select className={Style.formSelect} aria-label="Modelo de trabalho">
                <option value="">Selecione...</option>
                <option value="presencial">Presencial</option>
                <option value="remoto">Remoto</option>
                <option value="hibrido">Híbrido</option>
              </select>
            </label>
          </div>
        </form>
      </section>
      <div className={Style.formButtonContainer}>
        <button type="submit" className={Style.formButton}>
          Filtrar
        </button>
      </div>
    </div>
  );
};
