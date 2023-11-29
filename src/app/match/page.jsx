import Match from '@/src/componentes/match_empresa';
import Convuser from '@/src/componentes/converse_usuario';
import Footer from '@/src/componentes/footer';
import Header from '@/src/componentes/header_publico';

export default function Home() {
    return (
        <>
        <Header/>
        <Match />
        <Convuser/>
        <Footer/>
        </>
    )
}