import Style from "../css/vagas2.module.css";

export default function Vagas1() {
  return (
    <section className={Style.container}>
      <div className={Style.caixa1}>
        <div className={Style.caixa2}>
          Vaga de Estágio Santana de P. | SP R$ 2.320,00
        </div>
        <button className={Style.botao_veja}>Saiba mais</button>
      </div>

      <div className={Style.caixa1}>
        <div className={Style.caixa3}>
          Vaga de Estágio São Paulo | SP R$ 2.320,00
          <button className={Style.botao_veja}>Saiba mais</button>
        </div>{" "}
        <br /> <br />
      </div>

      <div className={Style.caixa1}>
        <div className={Style.caixa4}>
          Vaga de Estágio São Paulo | SP Híbrido R$ 1.650,00
          <button className={Style.botao_veja}>Saiba mais</button>
        </div>
      </div>
    </section>
  );
}
