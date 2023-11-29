import PlanoAssinatura from "@/src/componentes/checkout";
import Footer from "@/src/componentes/footer";
import Header from "@/src/componentes/header_publico";
import VLibras from "@/src/componentes/vlibras";
import Wave from "@/src/componentes/wave";

export default function Checkout(){
    return(
        <>
            <header className="relative">
                <Header bgColor="#243B53"/>
                <Wave position={"relative"} bgColor="#243B53"/>
            </header>
            <PlanoAssinatura />
            
            <VLibras forceOnload={true} />
            <Footer />
        </>
    );
}