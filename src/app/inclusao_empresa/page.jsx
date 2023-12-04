import Wave from "@/src/componentes/wave";
import Link from "next/link";
import VagasInclusaoEmpresa from "@/src/componentes/vagas_inclusaoEmpresa";
import CandidatosInclusaoEmpresa from "@/src/componentes/candidatos_inclusaoEmpresa";
import VLibras from "@/src/componentes/vlibras";
import Footer from "@/src/componentes/footer";
import HeaderUser from "@/src/componentes/header/headerUser";

export default function inclusao() {
  return (
    <>
      <header className="relative">
          <HeaderUser bgColor="#E8A023" />
          <Wave position={"relative"} bgColor="#E8A023"/>
      </header>
      <VagasInclusaoEmpresa />
      <CandidatosInclusaoEmpresa />
      <Footer bgColor={"#243B53"} />
      <VLibras forceOnload={true} />
    </>
  );
}
