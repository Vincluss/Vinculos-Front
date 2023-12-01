import Link from "next/link";
import Conteudo_sobre from "@/src/componentes/conteudo_sobre";
import NossaEquipe from "@/src/componentes/nossa_equipe";
import Footer from "@/src/componentes/footer";
import Header from "@/src/componentes/header_publico";
import Wave from "@/src/componentes/wave";
import Pilares from "@/src/componentes/pilares";
import VLibras from "@/src/componentes/vlibras";


export default function sobre() {
  return (
    <>
      <header className="relative">
        <Header bgColor="#003786" />
        <Wave bgColor="#003786" />
      </header>
      <Conteudo_sobre />
      <Pilares />
      <NossaEquipe />
      <Footer />
      <VLibras forceOnload={true} />
    </>
  );
}
