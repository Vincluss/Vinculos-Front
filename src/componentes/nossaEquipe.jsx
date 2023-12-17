import Style from "@/src/css/nossa_equipe.module.css"
import Image from "next/image"
import Link from "next/link"
import Renan from "@/src/assets/img-nossaEquipe/Renan-Foto.png"
import Gustavo from "@/src/assets/img-nossaEquipe/Gustavo-Foto.png"
import Maikon from "@/src/assets/img-nossaEquipe/Maikon-Foto.png"
import Joyce from "@/src/assets/img-nossaEquipe/Joyce-Foto.png"
import Talisson from "@/src/assets/img-nossaEquipe/Talisson-Foto.png"
import Gabs from "@/src/assets/img-nossaEquipe/Gabriella-Foto.png"
import Laura from "@/src/assets/img-nossaEquipe/Laura-Foto.png"


export default function NossaEquipe() {
    return (
        <section className={Style.NossaEquipe}>
            <h1>Nossa Equipe</h1>
            <div className={Style.Perfis}>
                <div className={Style.Perfil1}>
                    <div className={Style.ImagemPerfil1}>
                        <Image src={Renan} />
                    </div>
                    <div className={Style.TextoPerfil1}>
                        <Link href="https://www.linkedin.com/in/renanladislau" target="_blank">Renan Ladislau <br></br>Product Owner e Desenvolvedor Full Stack</Link>
                    </div>
                </div>

                <div className={Style.Perfil2}>
                    <div className={Style.ImagemPerfil2}>
                        <Image src={Gustavo} />
                    </div>
                    <div className={Style.TextoPerfil2}>
                        <Link href="https://www.linkedin.com/in/gustavo-saturnino/" target="_blank">Gustavo Saturnino <br></br> Scrum Master e Desenvolvedor Full Stack</Link>
                    </div>
                </div>

                <div className={Style.Perfil3}>
                    <div className={Style.ImagemPerfil3}>
                        <Image src={Maikon} />
                    </div>
                    <div className={Style.TextoPerfil3}>
                        <Link href="https://www.linkedin.com/in/maikon-henrique-856bb5212/" target="_blank">Maikon Henrique <br></br> Financeiro e Desenvolvedor Full Stack</Link>
                    </div>
                </div>


                <div className={Style.Perfil4}>
                    <div className={Style.ImagemPerfil4}>
                        <Image src={Joyce} />
                    </div>
                    <div className={Style.TextoPerfil4}>
                        <Link href="https://www.linkedin.com/in/maikon-henrique-856bb5212/" target="_blank">Joyce Camille<br></br> Banco de Dados e Desenvolvedora Full Stack</Link>
                    </div>
                </div>

                <div className={Style.Perfil5}>
                    <div className={Style.ImagemPerfil5}>
                        <Image src={Talisson} />
                    </div>
                    <div className={Style.TextoPerfil5}>
                        <Link href="https://www.linkedin.com/in/talissonhsantos/" target="_blank">Talisson Santos <br></br>Desenvolvedor Full Stack</Link>
                    </div>
                </div>

                <div className={Style.Perfil6}>
                    <div className={Style.ImagemPerfil6}>
                        <Image src={Gabs} />
                    </div>
                    <div className={Style.TextoPerfil6}>
                        <Link href="https://www.linkedin.com/in/gabriellahernandes/" target="_blank">Gabriella Hernandes<br></br>Designer e Desenvolvedora Full Stack</Link>
                    </div>
                </div>

                <div className={Style.Perfil7}>
                    <div className={Style.ImagemPerfil7}>
                        <Image src={Laura} />
                    </div>
                    <div className={Style.TextoPerfil7}>
                        <Link href="https://www.linkedin.com/in/laura-lopes-346b6120b/" target="_blank">Laura Lopes<br></br>Desenvolvedora Full Stack</Link>
                    </div>
                </div>

            </div>
        </section>
    )
}