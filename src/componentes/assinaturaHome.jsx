import Style from "../css/assinaturaHome.module.css";
import Link from "next/link";

export default function AssinaturaHome() {
  return (
    <section>
      <h1 className={Style.titulo}>Planos de Assinatura</h1>

      <div className={Style.assinaturaContainer}>
        <div className={Style.assinatura}>
          <h2 className={Style.titulo}>Plano Mensal</h2>
          <h3 className={Style.descricao}>Assine nosso plano trimestral!</h3>
          <p className={Style.money}>R$ 120,00</p>
        </div>

        <div className={Style.assinatura}>
          <h2 className={Style.titulo}>Plano Semestral</h2>
          <h3 className={Style.descricao}>Assine nosso plano semestral!</h3>
          <p className={Style.money}>R$ 615,00</p>
        </div>

        <div className={Style.assinatura}>
          <h2 className={Style.titulo}>Plano Anual</h2>
          <h3 className={Style.descricao}>Assine nosso plano anual!</h3>
          <p className={Style.money}>R$ 980,00</p>
        </div>
      </div>
      <div className={Style.btnContainer}>
        <Link href="/checkout" className={Style.btn}>
          Ver mais
        </Link>
      </div>
    </section>
  );
}
