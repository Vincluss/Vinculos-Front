import Style from "../css/botao.module.css";

export default function Boatao() {
    return(
        <section className={Style.container}>
                    <div className={Style.caixa1}>
            <button className={Style.botao_salvar}> 
          Salvar
        </button>
        </div>
        </section>
    )
}