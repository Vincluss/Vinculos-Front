import Style from "@/src/css/curriculo.module.css";

export default function Baixar() {
    return (
    <section className={Style.container_curriculo}>
            <div className={Style.container_centro}>
            <h1 className={Style.titulo_curriculo}>Curriculo</h1>

            <h1 className={Style.subtitulo_curriculo}>CRIE SEU CURRÍCULO</h1>

            <button type="submit" className={Style.btn_enviarCurriculo}>
                BAIXAR MODELO DE CURRÍCULO
            </button>
            </div>
    </section>
    )
};