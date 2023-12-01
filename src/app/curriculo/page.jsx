import Link from "next/link";
import Style from "@/src/css/curriculo.module.css";
import Image from "next/image";
import onda from "@/src/assets/img-efeitos/onda_cima.svg";
import Footer from "@/src/componentes/footer";
import Wave from "@/src/componentes/wave";
import Header from "@/src/componentes/header_publico";
import VLibras from "@/src/componentes/vlibras";

export default function Curriculo() {
  return (
    <section className={Style.container_curriculo}>
      <Header />
    
      <div className={Style.container_centro}>
        <h1 className={Style.titulo_curriculo}>Curriculo</h1>

        <h1 className={Style.subtitulo_curriculo}>CRIE SEU CURRÍCULO</h1>

        <button type="submit" className={Style.btn_enviarCurriculo}>
          BAIXAR MODELO DE CURRÍCULO
        </button>
      </div>

      <Footer />
      <VLibras forceOnload={true} />
    </section>
  );
}
