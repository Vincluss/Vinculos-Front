import CadastroVagas from "@/src/componentes/cadastra_vagas";
import Footer from "@/src/componentes/footer";
import Header from "@/src/componentes/header_publico";
import Wave from "@/src/componentes/wave";

export default function CadastrarVagas(){
    return(
        <>
            <header className="relative">
                <Header bgColor="#E8A023"/>
                <Wave bgColor="#E8A023"/>
            </header>
            <CadastroVagas/>
            <Footer/>
        </>    
    );
}