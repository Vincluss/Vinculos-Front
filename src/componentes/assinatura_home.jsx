import Style from "@/src/css/assinatura_home.module.css"

export default function AssinaturaHome(){
    return (
        <section>
            <h1 className={Style.titulo4}>Planos de Assinatura</h1>

            <div className={Style.quadrado_grande}>
                <div className={Style.quadrado1}>
                    <h2 className={Style.titulo1}>titulo</h2>
                    <h3 className={Style.descricao}>descrição</h3>
                    <p className={Style.money}>R$</p>
                </div>

                <div className={Style.quadrado2}>
                    <h2 className={Style.titulo1}>titulo</h2>
                    <h3 className={Style.descricao}>descrição</h3>
                    <p className={Style.money}>R$</p>
                </div>

                <div className={Style.quadrado3}>
                    <h2 className={Style.titulo1}>titulo</h2>
                    <h3 className={Style.descricao}>descrição</h3>
                    <p className={Style.money}>R$</p>
                </div>
            </div>
            <button className={Style.botao5}>Ver Mais</button>
        </section>
        
    )
}