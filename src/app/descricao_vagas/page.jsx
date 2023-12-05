import Link from "next/link";
import Wave from "@/src/componentes/wave";
import DescricaoVagas from "@/src/componentes/descricaoVagas";
import Footer from "@/src/componentes/footer";
import FormularioRH from "@/src/componentes/formularioRH";
import HeaderUser from "@/src/componentes/header/headerUser";

export default function Home() {
  return (
    <>
      <header className="relative">
        <HeaderUser bgColor="#003786" />
        <Wave position={"relative"} bgColor="#003786"/>
      </header>
      
      <DescricaoVagas/>
      <FormularioRH/>

      <Footer bgColor="#003786" />
    </>
  );
}
