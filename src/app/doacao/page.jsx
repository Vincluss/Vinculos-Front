import Link from 'next/link';
import Doe from '@/src/componentes/doacao_vinculos';
import Footer from '@/src/componentes/footer';
import Header from '@/src/componentes/header_publico';

export default function Home() {
    return (
        <>
        <Header/>
        <Doe />
        <Footer />
        </>
    )
}