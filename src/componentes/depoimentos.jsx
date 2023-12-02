import Style from "../css/depoimentos.module.css"

export default function Depoimentos(){
    return (
        <div className={Style.fundo}>
            <h1 className={Style.frase1}>Depoimentos</h1>
            <div>
                <iframe width="800" height="460" src="https://www.youtube.com/embed/Wf7GW367yC4?si=JfU0is-3u0E9HGQp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}