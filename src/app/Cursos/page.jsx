import Cursos from "@/src/componentes/cursos/cursos";
import Footer from "@/src/componentes/footer";
import Header from "@/src/componentes/header_publico";
import Wave from "@/src/componentes/wave";
import VLibras from "@/src/componentes/vlibras";

export default function Home() {
  return(
    <>
      <header className="relative">
        <Header bgColor="#003786" />
        <Wave position={"relative"} bgColor="#003786"/>
      </header>
      <Cursos/>
      <Footer bgColor="#003786" />
      <VLibras forceOnload={true} />
    </>
  )
}
