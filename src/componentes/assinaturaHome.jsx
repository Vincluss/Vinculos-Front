import Style from "@/src/css/assinatura_home.module.css";
import Link from "next/link";

export default function AssinaturaHome() {
  return (
    <section>
      <h1 className={Style.titulo}>Planos de Assinatura</h1>

      <div className={Style.quadrado_grande}>
        <div className={Style.quadrado}>
          <h2 className={Style.titulo1}>Plano Mensal</h2>
          <h3 className={Style.descricao}>Assine nosso plano trimestral!</h3>
          <p className={Style.money}>R$ 120,00</p>
        </div>

        <div className={Style.quadrado}>
          <h2 className={Style.titulo1}>Plano Semestral</h2>
          <h3 className={Style.descricao}>Assine nosso plano semestral!</h3>
          <p className={Style.money}>R$ 615,00</p>
        </div>

        <div className={Style.quadrado}>
          <h2 className={Style.titulo1}>Plano Anual</h2>
          <h3 className={Style.descricao}>Assine nosso plano anual!</h3>
          <p className={Style.money}>R$ 980,00</p>
        </div>
      </div>
      <Link href="/checkout">
        <div className={Style.btnContainer}>
          <button className={Style.btn}>Ver Mais</button>
        </div>
      </Link>
    </section>
  );
}
