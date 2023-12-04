import Style from "../css/doacao_vinculos.module.css";
import Image from "next/image";
import Code from "@/src/assets/img-efeitos/code.png";

export default function Doe() {
  return (
    <>
      <section className={Style.Conteudo} >
        <h1 className={Style.titulo_doacao}>Doação</h1>
        <div className={Style.quadrado1}>
          Doe para Instituições Parceiras.
        </div>
        <div className={Style.code}>
          <Image 
            src={Code}
            alt="imagem do qr code da vinculos"
          />
        </div>
      </section>
    </>
  );
}
