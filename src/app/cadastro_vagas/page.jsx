import CadastroVagas from "@/src/componentes/cadastra_vagas";
import Footer from "@/src/componentes/footer";
import Wave from "@/src/componentes/wave";
import VLibras from "@/src/componentes/vlibras";
import HeaderUser from "@/src/componentes/header/headerUser";

export default function CadastrarVagas(){
    return(
        <>
            <header className="relative">
                <HeaderUser bgColor="#243B53" />
                <Wave position={"relative"} bgColor="#243B53"/>
            </header>
            <CadastroVagas/>
            <Footer bgColor={"#243B53"} />
            <VLibras forceOnload={true} />
        </>    
    );
}