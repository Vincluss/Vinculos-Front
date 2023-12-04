import Doe from '@/src/componentes/doacao_vinculos';
import Footer from '@/src/componentes/footer';
import Wave from '@/src/componentes/wave';
import VLibras from "@/src/componentes/vlibras";
import HeaderUser from '@/src/componentes/header/headerUser';

export default function Home() {
    return (
        <>
            <header className="relative">
                <HeaderUser bgColor="#E8A023" />
                <Wave position={"relative"} bgColor="#E8A023"/>
            </header>
            <Doe />
            <Footer bgColor="#003786"/>
            <VLibras forceOnload={true} />
        </>
    )
}