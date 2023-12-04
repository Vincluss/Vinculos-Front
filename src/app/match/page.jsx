import Match from "@/src/componentes/match_empresa";
import Convuser from "@/src/componentes/converse_usuario";
import Footer from "@/src/componentes/footer";
import Wave from "@/src/componentes/wave";
import VLibras from "@/src/componentes/vlibras";
import HeaderUser from "@/src/componentes/header/headerUser";

export default function Home() {
  return (
    <>
      <header className="relative">
          <HeaderUser bgColor="#E8A023" />
          <Wave position={"relative"} bgColor="#E8A023"/>
      </header>
      <Match />
      <Convuser />
      <Footer bgColor={"#243B53"} />
      <VLibras forceOnload={true} />
    </>
  );
}
