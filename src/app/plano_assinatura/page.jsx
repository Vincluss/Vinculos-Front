import Footer from "@/src/componentes/footer";
import Header from "@/src/componentes/header_publico";
import Style from "@/src/css/plano_assinatura.module.css";
import Link from "next/link";
import VLibras from "@/src/componentes/vlibras";

export default function PlanoAssinatura() {
  return (
    <section className={Style.paginaPlanoAssinatura}>
      <Header />

      <div className={Style.container_planoAssinatura}>
        <h1 className={Style.titulo}>Planos De Assinatura</h1>

        <div className={Style.containerPlano}>
          <h1 className={Style.tituloAssinatura}>MENSAL</h1>
          <h2 className={Style.descricao}>Descrição</h2>
          <h2 className={Style.preco}>Valor</h2>
        </div>
        <button type="submit" className={Style.btn_assinatura}>
          Assinar
        </button>

        <div className={Style.containerPlano}>
          <h1 className={Style.tituloAssinatura}>TRIMENSAL</h1>
          <h2 className={Style.descricao}>Descrição</h2>
          <h2 className={Style.preco}>Valor</h2>
        </div>
        <button type="submit" className={Style.btn_assinatura}>
          Assinar
        </button>

        <div className={Style.containerPlano}>
          <h1 className={Style.tituloAssinatura}>ANUAL</h1>
          <h2 className={Style.descricao}>Descrição</h2>
          <h2 className={Style.preco}>Valor</h2>
        </div>
        <button type="submit" className={Style.btn_assinatura}>
          Assinar
        </button>
      </div>

      <Footer />
      <VLibras forceOnload={true} />
    </section>
  );
}
