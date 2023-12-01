import Link from 'next/link';
import Doe from '@/src/componentes/doacao_vinculos';
import Footer from '@/src/componentes/footer';
import Header from '@/src/componentes/header_publico';
import Wave from '@/src/componentes/wave';
import VLibras from "@/src/componentes/vlibras";

export default function Home() {
    return (
        <>
        <header className="relative">
            <Header bgColor="#E8A023" />
            <Wave position={"relative"} bgColor="#E8A023"/>
        </header>
        <Doe />
        <Footer />
        <VLibras forceOnload={true} />
        </>
    )
}