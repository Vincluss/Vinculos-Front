import Style from "@/src/css/assinatura_home.module.css";

export default function AssinaturaHome() {
  return (
    <section>
      <h1 className={Style.titulo}>Planos de Assinatura</h1>

      <div className={Style.quadrado_grande}>
        <div className={Style.quadrado}>
          <h2 className={Style.titulo1}>Plano Trimestral</h2>
          <h3 className={Style.descricao}>Assine nosso plano trimestral!</h3>
          <p className={Style.money}>R$</p>
        </div>

        <div className={Style.quadrado}>
          <h2 className={Style.titulo1}>Plano Semestral</h2>
          <h3 className={Style.descricao}>Assine nosso plano semestral!</h3>
          <p className={Style.money}>R$</p>
        </div>

        <div className={Style.quadrado}>
          <h2 className={Style.titulo1}>Plano Anual</h2>
          <h3 className={Style.descricao}>Assine nosso plano anual!</h3>
          <p className={Style.money}>R$</p>
        </div>
      </div>
      <div className={Style.btnContainer}>
        <button className={Style.btn}>Ver Mais</button>
      </div>
    </section>
  );
}
