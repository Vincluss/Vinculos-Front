import Style from "../css/depoimentos.module.css"

export default function Depoimentos(){
    return (
        <div className={Style.fundo}>
            <h1 className={Style.frase}>Depoimentos</h1>
            <div className={Style.frameContainer}>
                <iframe src="https://www.youtube.com/embed/Wf7GW367yC4?si=JfU0is-3u0E9HGQp" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    )
}