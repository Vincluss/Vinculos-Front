import Candidato from "@/src/componentes/formulario";
import Header from "@/src/componentes/header_publico";
import Perfil from "@/src/componentes/perfilCandidato";
import Wave from "@/src/componentes/wave";
import Footer from "@/src/componentes/footer";

export default function EditarPerfil() {
  return (
    <>
      <header className="relative">
        <Header bgColor="#003786" />
        <Wave position={"relative"} bgColor="#003786" />
      </header>

            
      <Perfil />
      <Candidato />
      <Footer />
    </>
  );
}