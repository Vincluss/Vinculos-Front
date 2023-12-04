import Footer from "@/src/componentes/footer";
import VLibras from "@/src/componentes/vlibras";
import HeaderUser from "@/src/componentes/header/headerUser";
import Wave from "@/src/componentes/wave";
import Baixar from "@/src/componentes/curriculo";

export default function Curriculo() {
  return (
    <>
      <header className="relative">
        <HeaderUser bgColor="#003786" />
        <Wave position={"relative"} bgColor="#003786" />
      </header>
      <Baixar />
      <Footer />
      <VLibras forceOnload={true} />
    </>
  );
}
