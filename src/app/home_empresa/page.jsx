import Footer from '@/src/componentes/footer';
import AssinaturaHome from '@/src/componentes/assinatura_home';
import HomeEmpresa from '@/src/componentes/home_empresa';
import Link from 'next/link';
import Header from '@/src/componentes/header_publico';
import Wave from '@/src/componentes/wave';
import HomeGeral from '@/src/componentes/home_geral';

export default function Empresa() {
    return (
        <>
            <header className='relative'>
                <Header bgColor="#243B53"/>
                <Wave />
            </header>
            <HomeEmpresa/>
            <AssinaturaHome />
            <Footer />
        </>
    )
}