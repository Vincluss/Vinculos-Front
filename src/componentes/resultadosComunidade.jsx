import Image from "next/image";
import Style from "../css/resultado_comunidade.module.css";
import Comunidade1 from "@/src/assets/img-pcds/fotoIsa3.jpg";
import Comunidade2 from "@/src/assets/img-pcds/imgCapacita.jpg";
import Comunidade3 from "@/src/assets/img-pcds/imgOportunidade.jpg";

export default function ResultadoComunidade() {
  return (
    <>
      <section>
        <h2 className={Style.titulo}>
          O que você ganha utilizando a Vínculos?
        </h2>

        <div className={Style.resultsContainer}>
          <div className={Style.imgContainer}>
            <div className={Style.imgResultsContainer}>
              <Image
                src={Comunidade1}
                alt="Homem cego utilizando um computador junto de uma mulher"
                className={Style.imgResults}
              />
            </div>
            <h3 className={Style.descricao}>Inclusão</h3>
          </div>

          <div className={Style.imgContainer}>
            <div className={Style.imgResultsContainer}>
              <Image
                src={Comunidade2}
                alt="Mulher com deficiência física sorrindo com um homem em uma reunião"
                className={Style.imgResults}
              />
            </div>
            <h3 className={Style.descricao}>Capacitação</h3>
          </div>

          <div className={Style.imgContainer}>
            <div className={Style.imgResultsContainer}>
              <Image
                src={Comunidade3}
                alt="Mulher utilizando uma lupa para ler um livro"
                className={Style.imgResults}
              />
            </div>
            <h3 className={Style.descricao}>
              Mais oportunidades
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
