import Match from "@/src/componentes/match_empresa";
import Convuser from "@/src/componentes/converse_usuario";
import Footer from "@/src/componentes/footer";
import Header from "@/src/componentes/header_publico";
import Wave from "@/src/componentes/wave";
import VLibras from "@/src/componentes/vlibras";

export default function Home() {
  return (
    <>
      <header className="relative">
        <Header bgColor="#243B53" />
        <Wave position={"relative"} bgColor="#243B53" />
      </header>
      <Match />
      <Convuser />
      <Footer bgColor="#243B53"/>
      <VLibras forceOnload={true} />
    </>
  );
}
