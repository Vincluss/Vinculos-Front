import Style from "@/src/css/vagasCandidato.module.css";
import Link from "next/link";

export default function VagasCandidato({ Empresa, Vaga, Local, Salario }) {
    return (
        <>
            <section className={`${Style.fundo_colorido}`}>
                <div className={Style.alinhamento}>
                    <div className={Style.fundo_redondo}>
                        <div className={Style.conteudo}>
                            <h2 className={`${Style.nome_empresa}`}>{Empresa}</h2>
                            <h3 className={`${Style.nome_vaga}`}>{Vaga}</h3>
                            <p className={`${Style.nome_local}`}>{Local}</p>
                            <p className={`${Style.qtd_salario}`}>{Salario}</p>
                            <Link href="/cadastro_vagas"><button className={Style.saiba}>Saiba Mais</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}