import Link from "next/link";
import HomeUsuario from "@/src/componentes/home_usuario";
import Vagas from "@/src/componentes/vagas";
import Candidatos from "@/src/componentes/inclusao_home";
import Cursos from "@/src/componentes/cursos_home";
import Footer from "@/src/componentes/footer";
import Header from '@/src/componentes/header_publico';
import Wave from '@/src/componentes/wave';
import ResultadoComunidade from "@/src/componentes/resultados_comunidade";
import Parceiros from "@/src/componentes/parceiros";
import VLibras from "@/src/componentes/vlibras";

export default function Usuario() {
  return (
    <>
      <header className="relative">
        <Header bgColor="#003786" />
        <Wave position={"absolute"} bgColor="#003786"/>
      </header>
        <HomeUsuario />
        <ResultadoComunidade />
        {/* <Vagas /> */}
      <section className="flex w-full">
        <Candidatos />
        <Cursos />
      </section>
      <Parceiros />
      <Footer />
      <VLibras forceOnload={true} />
    </>
  );
}
