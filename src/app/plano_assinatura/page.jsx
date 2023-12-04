import Footer from "@/src/componentes/footer";
import HeaderUser from "@/src/componentes/header/headerUser";
import Wave from "@/src/componentes/wave";
import Style from "@/src/css/plano_assinatura.module.css";
import VLibras from "@/src/componentes/vlibras";
import Link from "next/link";

export default function PlanoAssinatura() {
    return (
        <>
            <header className="relative">
                <HeaderUser bgColor="#243B53" />
                <Wave position={"relative"} bgColor="#243B53" />
            </header>
            <section className={Style.paginaPlanoAssinatura}>

                <div className={Style.container_planoAssinatura}>
                    <h1 className={Style.titulo}>Planos De Assinatura</h1>

                    <div className={Style.containerPlano}>
                        <h1 className={Style.tituloAssinatura}>MENSAL</h1>
                        <h2 className={Style.descricao}>Descrição</h2>
                        <h2 className={Style.preco}>Valor</h2>
                    </div>
                    <button type="submit" className={Style.btn_assinatura}>Assinar</button>

                    <div className={Style.containerPlano}>
                        <h1 className={Style.tituloAssinatura}>TRIMENSAL</h1>
                        <h2 className={Style.descricao}>Descrição</h2>
                        <h2 className={Style.preco}>Valor</h2>
                    </div>
                    <button type="submit" className={Style.btn_assinatura}>Assinar</button>

                    <div className={Style.containerPlano}>
                        <h1 className={Style.tituloAssinatura}>ANUAL</h1>
                        <h2 className={Style.descricao}>Descrição</h2>
                        <h2 className={Style.preco}>Valor</h2>
                    </div>
                    <button type="submit" className={Style.btn_assinatura}>Assinar</button>
                </div>
            </section>
            <Footer bgColor={"#243B53"} />
            <VLibras forceOnload={true}/>
        </>
    );
}