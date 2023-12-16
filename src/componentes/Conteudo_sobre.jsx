import Style from "@/src/css/conteudo_sobre.module.css"
import Link from "next/link";

export default function Conteudo_sobre() {
    return (
        <>
            <section className={Style.Conteudo} >
                <h1 className={Style.TituloSobre}>Sobre o Projeto</h1>
                <div className={Style.quadrado1}>
                Vínculos vem de conexões e relações entre essas pessoas que nos inspiraram a criar esse projeto.
                </div>
                <Link href="/sobre">
                    <button className={Style.botao_sobre}>Ver Mais</button>
                </Link>
            </section>
        </>
    )
}