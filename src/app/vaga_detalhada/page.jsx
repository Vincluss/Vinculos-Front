import Link from "next/link";
import Wave from "@/src/componentes/wave";
import Header from "@/src/componentes/headerPublico";
import DescricaoVagas from "@/src/componentes/descricaoVagas";
import Footer from "@/src/componentes/footer";
import FormularioRH from "@/src/componentes/formularioRH";
import VLibras from "@/src/componentes/vlibras";

export default function Home() {
  return (
    <>
      <header className="relative">
        <Header bgColor="#003786" />
        <Wave bgColor="#003786" position="relative" />
      </header>
      <main>
        <DescricaoVagas />
        <FormularioRH />
      </main>
      <Footer bgColor={'#003786'}/>
      <VLibras  />
    </>
  );
}
