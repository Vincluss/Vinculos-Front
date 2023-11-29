import Link from "next/link";
import Wave from "@/src/componentes/wave";
import Header from "@/src/componentes/header_publico";
import DescricaoVagas from "@/src/componentes/descricao_vagas";
import Footer from "@/src/componentes/footer";
import FormularioRH from "@/src/componentes/formularioRH";

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
      <Footer />
    </>
  );
}
