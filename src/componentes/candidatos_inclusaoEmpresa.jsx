import Style from "@/src/css/candidatos_inclusãoEmpresa.module.css"
import Link from "next/link"

export default function CandidatosInclusãoEmpresa() {
    return (
        <section className={Style.Candidatos}>
            <h1 className={Style.TituloCandidatos}>Candidatos</h1>
            <div className={Style.CandidatosConteudo}>
                <div className={Style.Candidato1}>
                </div>
                <div className={Style.Candidato2}>
                </div>
                <div className={Style.Candidato3}>
                </div>
            </div>
            <Link href="/match">
                <div className={Style.BotaoVermais1}>
                    Ver Mais
                </div>
            </Link>
        </section>
    )

}