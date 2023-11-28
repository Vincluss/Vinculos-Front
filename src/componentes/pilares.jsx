import Style from "@/src/css/pilares_vinculos.module.css"




export default function pilares() {
    return (

        <section className={Style.Pilares}> {/*section com os pilares*/}
            <div className={Style.Mission}>
                <div className={Style.SimboloMission}>
                </div>
                <div className={Style.TextoMission}>
                    Facilitar oportunidades e promover a inclusão de pessoas com deficiência sensorial no mercado de trabalho.
                </div>
            </div>

            <div className={Style.Vision}>
                <div className={Style.SimboloVision}>
                </div>
                <div className={Style.TextoVision}>
                    Criando um ambiente de trabalho onde todas as habilidades são valorizadas, respeitadas e aproveitadas para impulsionar a inovação e o sucesso coletivo.
                </div>
            </div>

            <div className={Style.Value}>
                <div className={Style.SimboloValue}>
                </div>
                <div className={Style.TextoValue}>
                    <br></br>
                    <b>Inclusão e Diversidade:</b> Comprometemo-nos a criar um ambiente de trabalho que celebre a diversidade em todas as suas formas.
                    <br></br>
                    <br></br>
                    <b>Igualdade de Oportunidades:</b> Acreditamos em proporcionar igualdade de oportunidades para todos os membros da nossa equipe.
                    <br></br>
                    <br></br>
                    <b>Respeito e Empatia:</b> Cultivamos um ambiente baseado no respeito mútuo e na empatia, onde cada pessoa é tratada com dignidade e compreensão.
                </div>
            </div>





        </section>



    )


}