import Cursos_user from "@/src/componentes/cursos/cursos_user";
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
      <Cursos_user />
      <Footer bgColor="#003786" />
      <VLibras forceOnload={true} />
    </>
  )
}
