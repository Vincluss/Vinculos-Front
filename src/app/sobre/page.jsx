import Link from "next/link";
import NossaEquipe from "@/src/componentes/nossaEquipe";
import Footer from "@/src/componentes/footer";
import Wave from "@/src/componentes/wave";
import Pilares from "@/src/componentes/pilares";
import VLibras from "@/src/componentes/vlibras";
import HeaderUser from "@/src/componentes/header/headerUser";

export default function sobre() {
  return (
    <>
      <header className="relative">
          <HeaderUser bgColor="#003786" />
          <Wave position={"relative"} bgColor="#003786"/>
      </header>
      <Pilares />
      <NossaEquipe />
      <footer className="relative">
        <Footer bgColor={"#003786"}/>
      </footer>
      <VLibras  />
    </>
  );
}
