import Link from "next/link";
import HomeUsuario from "@/src/componentes/home_usuario";
import Vagas from "@/src/componentes/vagas";
import Candidatos from "@/src/componentes/inclusao_home";
import Cursos from "@/src/componentes/cursos_home";
import Footer from "@/src/componentes/footer";
import Header from '@/src/componentes/header_publico';
import Wave from '@/src/componentes/wave';
import ResultadoComunidade from "@/src/componentes/resultados_comunidade";
import CarrosselParceiro from "@/src/componentes/carrossel_parceiro";

export default function Usuario() {
  return (
    <>
      <header className="relative">
        <Header bgColor="#003786" />
        <Wave />
      </header>
        <HomeUsuario />
        <ResultadoComunidade />
        <Vagas />
      <section className="flex w-full">
        <Candidatos />
        <Cursos />
      </section>
      <Footer />
    </>
  );
}
