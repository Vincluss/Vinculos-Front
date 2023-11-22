import Link from "next/link";
import Style from "@/src/css/curriculo.module.css";
import Image from "next/image";
import onda from "@/src/assets/img-efeitos/onda_cima.svg";
import Header from "@/src/componentes/header";

export default function Curriculo() {
  return (
    <section className={Style.container_curriculo}>
      <Header />
      
      <Image src={onda} className={Style.onda} />

      <div className={Style.container_centro}>
        <h1 className={Style.titulo_curriculo}>Curriculo</h1>

        <h1 className={Style.subtitulo_curriculo}>CRIE SEU CURRÍCULO</h1>

        <button type="submit" className={Style.btn_enviarCurriculo}>
          BAIXAR MODELO DE CURRÍCULO
        </button>
      </div>
    </section>
  );
}
