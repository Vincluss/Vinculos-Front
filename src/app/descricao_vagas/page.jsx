import Descricao_Vagas from "@/src/componentes/descricao_vagas";
import Link from "next/link";
import DescricaoVagas from "@/src/componentes/descricao";
import Wave from "@/src/componentes/wave";
import Header from "@/src/componentes/header_publico";

export default function Home() {
  return (
    <>
      <header className="relative">
        <Header bgColor="#003786" />
        <Wave bgColor="#003786" position= "relative" />
      </header>
      <DescricaoVagas />
    </>
  );
}
