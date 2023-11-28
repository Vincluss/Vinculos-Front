import Style from "@/src/css/conteudo_sobre.module.css"

export default function Conteudo_sobre() {
    return (

        <section className={Style.Conteudo} >
            <h1 className={Style.TituloSobre}>Sobre o Projeto</h1>
            <div className={Style.quadrado1}>
            Vínculos vem de conexões e relações entre pessoas!
            Empregabilidade e visibilidade para pessoas com deficiência sensorial.  
            </div>
        </section>
    )
}