import Image from "next/image";
import Style from "../css/resultado_empresa.module.css";
import Lado from "@/src/assets/img-efeitos/imagem_empresa.png";

export default function ResultadoEmpresa() {
  return (
    <>
      <section className={Style.alinhamento}>
        <div className={Style.containerTexto}>
          <h2 className={Style.tituloEmpresa}>Empresas criando Vínculos têm:</h2>

          <ul className={Style.listaEmpresa}>
            <li>Alta diversidade</li>
            <li>Time mais humanizado</li>
            <li>Imagem atrativa para investidores</li>
          </ul>
        </div>

        <div className={Style.containerImagem}>
          <Image
            src={Lado}
            alt="resultado empresa"
            className={Style.imagemResultado}
          />
        </div>
      </section>
    </>
  );
}
