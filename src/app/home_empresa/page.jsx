import Footer from "@/src/componentes/footer";
import AssinaturaHome from "@/src/componentes/assinaturaHome";
import HomeEmpresa from "@/src/componentes/home_empresa";
import HeaderUser from "@/src/componentes/header/headerUser";
import ResultadoEmpresa from "@/src/componentes/resultadoEmpresa";
import InclusaoEmpresa from "@/src/componentes/candidatoEmpresa";
import Wave from "@/src/componentes/wave";
import VLibras from "@/src/componentes/vlibras";
import Style from "../../css/mainPage.module.css"

export default function Empresa() {
  return (
    <>
      <header className="relative">
        <HeaderUser bgColor="#243B53" />
        <Wave position={"absolute"} bgColor="#243B53" />
      </header>
      <main className={Style.wavesBg}>
        <HomeEmpresa />
        <ResultadoEmpresa />
        <InclusaoEmpresa />
        <AssinaturaHome />
      </main>
      <Footer bgColor={"#243B53"} />
      <VLibras forceOnload={true} />
    </>
  );
}
