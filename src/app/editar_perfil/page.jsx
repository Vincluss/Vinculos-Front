'use client'

import Candidato from "@/src/componentes/formulario";
import Perfil from "@/src/componentes/perfilCandidato";
import Wave from "@/src/componentes/wave";
import Footer from "@/src/componentes/footer";
import VLibras from "@/src/componentes/vlibras";
import HeaderUser from "@/src/componentes/header/headerUser";

export default function EditarPerfil() {
  return (
    <>
      <header className="relative">
          <HeaderUser bgColor="#003786" />
          <Wave position={"relative"} bgColor="#003786"/>
      </header>
      <Perfil />
      <Candidato />
      <Footer bgColor={"#003786"}/>
      <VLibras  />
    </>
  );
}