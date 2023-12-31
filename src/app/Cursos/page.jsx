import Cursos from "@/src/componentes/cursos/cursos";
import Footer from "@/src/componentes/footer";
import Wave from "@/src/componentes/wave";
import VLibras from "@/src/componentes/vlibras";
import HeaderUser from "@/src/componentes/header/headerUser";

export default function Home() {
  return(
    <>
      <header className="relative">
        <HeaderUser bgColor="#003786" />
        <Wave position={"relative"} bgColor="#003786"/>
      </header>
      <Cursos/>
      <Footer bgColor="#003786" />
      <VLibras  />
    </>
  )
}
