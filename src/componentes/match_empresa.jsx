import Image from "next/image";
import Style from "../css/match_empresa.module.css";
import Dani from "@/public/img/img-pessoas/img-inclusao1.png"
import Gus from "@/public/img/img-pessoas/img-inclusao2.png"
import Danilo from "@/public/img/img-pessoas/img-inclusao3.png"

export default function Candidatos() {
  return (
  <article>
    <h1 className={Style.Titulo}> Candidatos </h1>

    <section className={Style.Candidato}>
        <div className={Style.Position}> {/* aqui displayflex normal */}
          <Image src={Dani} alt="Candidata" className={Style.Ajusteimg}/>
        </div>

        <div className={Style.NomeMatch}>   {/*  aqui fica com displayflex de coluna */}
          <h2 className={Style.HDois}> Daniele Almeida </h2>
          <p> Possui um match de 50% com a sua vaga de estagio em Administração </p>
          <button className={Style.SaibaMais}> Saiba Mais </button>
        </div>
    </section>

    <section className={Style.Candidato}>
        <div className={Style.Position}> {/* aqui displayflex normal */}
          <Image src={Gus} alt="Candidato" className={Style.Ajusteimg}/>
        </div>

        <div className={Style.NomeMatch}>   {/*  aqui fica com displayflex de coluna */}
          <h2 className={Style.HDois}> Gustavo Renato </h2>
          <p> Possui um match de 70% com a sua vaga de estagio em Administração </p>
          <button className={Style.SaibaMais}> Saiba Mais </button>
        </div>
    </section>

    <section className={Style.Candidato}>
        <div className={Style.Position}> {/* aqui displayflex normal */}
          <Image src={Danilo} alt="Candidato Danilo" className={Style.Ajusteimg}/>
        </div>

        <div className={Style.NomeMatch}>   {/*  aqui fica com displayflex de coluna */}
          <h2 className={Style.HDois}> Danilo Santos </h2>
          <p> Possui um match de 80% com a sua vaga de estagio em Administração </p>
          <button className={Style.SaibaMais}> Saiba Mais </button>
        </div>
    </section>

    <button className={Style.VejaMais}> Ver Mais Candidatos </button>

  </article>
  );
}
