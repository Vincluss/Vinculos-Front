import Pagamento from "@/src/componentes/pagamento";
import VLibras from "@/src/componentes/vlibras";

export default function Home(){
    return(
        <>
            <Pagamento />
            <VLibras forceOnload={true} />

        </>    
        
    );
}