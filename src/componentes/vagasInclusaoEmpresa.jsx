import Style from "@/src/css/vagas_inclusaoEmpresa.module.css"
import Link from "next/link"

export default function VagasInclusaoEmpresa(){
    return(
            <section className={Style.Vagas}>
                <h1 className={Style.TituloVagas}>Vagas</h1>
                <div className={Style.VagasConteudo}>
                    <div className={Style.Vaga1}>
                        <h1>Empresa</h1>
                        <h1>Vaga de Estágio</h1>
                        <h1>Santana de Parnaiba | SP</h1>
                        <h1>R$2.320,00</h1>
                    </div>
                    <div className={Style.Vaga2}>
                    <h1>Empresa</h1>
                        <h1>Vaga de Estágio</h1>
                        <h1>São Paulo | SP</h1>
                        <h1>R$2.320,00</h1>
                    </div>
                    <div className={Style.Vaga3}>
                    <h1>Empresa</h1>
                        <h1>Vaga de Estágio</h1>
                        <h1>São Paulo| SP Híbrido</h1>
                        <h1>R$1.650,00</h1>
                    </div>
                </div>
                <Link href="/cadastro_vagas">
                    <div className={Style.BotaoVermais1}>
                        Cadastrar
                    </div>
                </Link>
            </section>
    )
}