import Link from "next/link";
import HomeUsuario from "@/src/componentes/home_usuario";
import Vagas from "@/src/componentes/vagas";
import Candidatos from "@/src/componentes/inclusao_home";
import Cursos from "@/src/componentes/cursos_home";
import Footer from "@/src/componentes/Footer";
import Header from '@/src/componentes/header';
import Wave from '@/src/componentes/wave';

export default function Usuario() {
  return (
    <>
      <header className='relative'>
        <Header />
        <Wave />
      </header>
      <HomeUsuario />
      <section className="flex w-full">
        <Candidatos />
        <Cursos />
      </section>
      <Footer />
    </>
  );
}
