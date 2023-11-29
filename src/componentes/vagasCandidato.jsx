import Style from "@/src/css/vagasCandidato.module.css";

export default function VagasCandidato({ fundo_colorido, fundo_redondo }) {
    return (
            <section className={`${Style.fundo_colorido} ${fundo_colorido}`}>
                <div className={Style.alinhamento}>
                    <div className={`${Style.fundo_redondo} ${fundo_redondo}`}>
                        <div className={Style.conteudo}>
                            <h2></h2>
                            <h3></h3>
                            <p></p>
                            <p></p>
                            <button className={Style.saiba}>Saiba Mais</button>
                        </div>
                    </div>

                    {/* <div className={Style.fundo_redondo}>
                        <div className={Style.conteudo}>
                            <h2>Empresa</h2>
                            <h3>Vaga De Estágio</h3>
                            <p>São Paulo | SP</p>
                            <p>R$ 2.320,00</p>
                            <button className={Style.saiba}>Saiba Mais</button>
                        </div>
                    </div>

                    <div className={Style.fundo_redondo}>
                        <div className={Style.conteudo}>
                            <h2>Empresa</h2>
                            <h3>Vaga De Estágio</h3>
                            <p>São Paulo | SP</p>
                            <p>R$ 1.650,00</p>
                            <button className={Style.saiba}>Saiba Mais</button>
                        </div>
                    </div> */}
                </div>
            </section>
    )
}