import Style from "@/src/css/conteudo_sobre.module.css"
import { Poppins } from "next/font/google";

export default function Conteudo_sobre() {
    return (

        <section className={Style.Conteudo} >
            <h1 className={Style.TituloSobre}>Sobre o Projeto</h1>
            <div className={Style.quadrado1}>
            A vínculos surgiu em 2023. A ideia é profissionalizar, incluir e integrar deficientes sensoriais no mercado de trabalho.
            </div>
            <h1 className={Style.TituloDepoimentos}>Depoimentos</h1>
            <div className={Style.quadrado2}>
                    
            </div>
            <h1 className={Style.TituloEquipe}>Nossa Equipe</h1>
            <div className={Style.quadrado3}></div>
        </section>
    )
}