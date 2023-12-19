import Match from "@/src/componentes/matchEmpresa";
import ConverseUsuario from "@/src/componentes/converseUsuario";
import Footer from "@/src/componentes/footer";
import Wave from "@/src/componentes/wave";
import VLibras from "@/src/componentes/vlibras";
import HeaderUser from "@/src/componentes/header/headerUser";

export default function Home() {
  return (
    <>
      <header className="relative">
          <HeaderUser bgColor="#243B53" />
          <Wave position={"relative"} bgColor="#243B53"/>
      </header>
      <Match />
      <ConverseUsuario />
      <Footer bgColor={"#243B53"} />
      <VLibras  />
    </>
  );
}
