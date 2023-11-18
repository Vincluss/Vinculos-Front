import Style from "@/src/css/plano_assinatura.module.css"
import Link from "next/link";

export default function PlanoAssinatura () {
    return(
        <section className={Style.container_planoAssinatura}>

            <h1 className={Style.titulo}>Planos De Assinatura</h1>

            <div className={Style.containerPlano}>
                <h1 className={Style.tituloAssinatura}>Titulo</h1>
                <h2 className={Style.descricao}>Descrição</h2>
                <h2 className={Style.preco}>Valor</h2>
            </div>
            <button type="submit" className={Style.btn_assinatura}>Assinar</button>

            <div className={Style.containerPlano}>
                <h1 className={Style.tituloAssinatura}>Titulo</h1>
                <h2 className={Style.descricao}>Descrição</h2>
                <h2 className={Style.preco}>Valor</h2>
            </div>
            <button type="submit" className={Style.btn_assinatura}>Assinar</button>

            <div className={Style.containerPlano}>
                <h1 className={Style.tituloAssinatura}>Titulo</h1>
                <h2 className={Style.descricao}>Descrição</h2>
                <h2 className={Style.preco}>Valor</h2>
            </div>
            <button type="submit" className={Style.btn_assinatura}>Assinar</button>

            <link href={"/curriculo"}>Clique Aqui</link>

        </section>    
    );
}