import Link from "next/link";
import Style from "../../css/mainPage.module.css";
import Vagas from "@/src/componentes/vagas";
import Candidatos from "@/src/componentes/inclusaoHome";
import Cursos from "@/src/componentes/cursosHome";
import Footer from "@/src/componentes/footer";
import Wave from "@/src/componentes/wave";
import ResultadoComunidade from "@/src/componentes/resultadosComunidade";
import Parceiros from "@/src/componentes/parceiros";
import VLibras from "@/src/componentes/vlibras";
import HomeUsuario from "@/src/componentes/homeUser";
import HeaderUser from "@/src/componentes/header/headerUser";

export default function Usuario() {
  return (
    <>
      <header className="relative">
        <HeaderUser bgColor="#003786" />
        <Wave position={"absolute"} bgColor="#003786" />
      </header>
      <main>
        <div className={Style.wavesBg}>
          <HomeUsuario />
          <ResultadoComunidade />
          <Vagas />
        </div>
        <section className={Style.container}>
          <Candidatos />
          <Cursos />
        </section>
        <Parceiros />
      </main>
      <Footer bgColor="#003786" />
      <VLibras  />
    </>
  );
}
