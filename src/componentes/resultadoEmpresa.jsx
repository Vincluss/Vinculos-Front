import Image from "next/image";
import Style from "../css/resultadoEmpresa.module.css";
import imgResult from "@/src/assets/img-pcds/homemCadeiraDeRodas.jpg";
import imgResult2 from "@/src/assets/img-pcds/fotoSamantha2.jpeg";
import imgResult3 from "@/src/assets/img-pessoas/imgResultados.jpg";

export default function ResultadoEmpresa() {
  return (
    <>
      <section>
        <h2 className={Style.titulo}>
          O que sua empresa ganha utilizando a Vínculos?
        </h2>

        <div className={Style.resultsContainer}>
          <div className={Style.imgContainer}>
            <div className={Style.imgResultsContainer}>
              <Image
                src={imgResult}
                alt="Homem cego utilizando um computador junto de uma mulher"
                className={Style.imgResults}
              />
            </div>
            <h3 className={Style.descricao}>Alta diversidade</h3>
          </div>

          <div className={Style.imgContainer}>
            <div className={Style.imgResultsContainer}>
              <Image
                src={imgResult2}
                alt="Mulher com deficiência física sorrindo com um homem em uma reunião"
                className={Style.imgResults}
              />
            </div>
            <h3 className={Style.descricao}>Time mais humanizado</h3>
          </div>

          <div className={Style.imgContainer}>
            <div className={Style.imgResultsContainer}>
              <Image
                src={imgResult3}
                alt="Mulher utilizando uma lupa para ler um livro"
                className={Style.imgResults}
              />
            </div>
            <h3 className={Style.descricao}>Imagem atrativa para investidores</h3>
          </div>
        </div>
      </section>
    </>
  );
}
