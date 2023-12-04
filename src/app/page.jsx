import HomeGeral from "@/src/componentes/home_geral";
import Vagas from "@/src/componentes/vagas";
import Depoimentos from "@/src/componentes/depoimentos";
import Parceiros from "@/src/componentes/parceiros";
import Footer from "@/src/componentes/footer";
import Header from "../componentes/header_publico";
import Wave from "../componentes/wave";
import VLibras from "@/src/componentes/vlibras";

export default function Home() {
  return (
    <>
      <header className="relative">
        <Header bgColor="#003786" />
        <Wave position={"absolute"} bgColor="#003786" />
      </header>
      <HomeGeral />
      <main>
        <Vagas />
        <Depoimentos />
        <Parceiros />
      </main>
      <Footer bgColor="#003786"/>
      <VLibras />
    </>
  );
}
