import Style from "../css/veja.module.css";

export default function Veja() {
    return(
        <section className={Style.container}>
        <button className={Style.botao_veja}> 
          Veja mais
        </button>
        </section>
    )
}