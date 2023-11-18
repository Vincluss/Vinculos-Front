import Style from "../css/form.module.css"

export default function Form() {
    return (
        <section className={Style.container}>
            <form className={Style.caixa_pequena1}>
             <label>
                Cargo*
                <input />
             </label>

             <label>
                Cidade*
                <input />
             </label>

             <label>
                Salário*
                <input />
             </label>

             <label>
                Área de atuação*
                <input />
             </label>

             <button type="submit">Filtrar</button>
            </form>
        </section>
    )
}