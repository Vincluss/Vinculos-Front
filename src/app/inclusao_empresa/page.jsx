import Header from "@/src/componentes/header_publico";
import Wave from "@/src/componentes/wave";
import Link from "next/link";
import VagasInclusãoEmpresa from "@/src/componentes/vagas_inclusaoEmpresa";
import CandidatosInclusãoEmpresa from "@/src/componentes/candidatos_inclusaoEmpresa";
import VLibras from "@/src/componentes/vlibras";
import Footer from "@/src/componentes/footer";


export default function inclusao() {
  return (
    <>
      <header className="relative">
        <Header bgColor="#E8A023" />
        <Wave position={"relative"} bgColor="#E8A023" />
      </header>
      <VagasInclusãoEmpresa />
      <CandidatosInclusãoEmpresa />
      <Footer />
      <VLibras forceOnload={true} />
    </>
  );
}
