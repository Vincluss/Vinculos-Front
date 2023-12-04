import Doe from '@/src/componentes/doacao_vinculos';
import Footer from '@/src/componentes/footer';
import Wave from '@/src/componentes/wave';
import VLibras from "@/src/componentes/vlibras";
import HeaderUser from '@/src/componentes/header/headerUser';

export default function Home() {
    return (
        <>
            <header className="relative">
                <HeaderUser bgColor="#243B53" />
                <Wave position={"relative"} bgColor="#243B53"/>
            </header>
            <Doe />
            <Footer bgColor="#003786"/>
            <VLibras forceOnload={true} />
        </>
    )
}