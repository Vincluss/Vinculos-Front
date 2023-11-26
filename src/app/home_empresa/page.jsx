import Footer from '@/src/componentes/Footer';
import AssinaturaHome from '@/src/componentes/assinatura_home';
import HomeEmpresa from '@/src/componentes/home_empresa';
import Link from 'next/link';
import Header from '@/src/componentes/header';
import Wave from '@/src/componentes/wave';
import HomeGeral from '@/src/componentes/home_geral';

export default function Empresa() {
    return (
        <>
            <header className='relative'>
                <Header />
                <Wave />
            </header>
            <HomeEmpresa/>
            <AssinaturaHome />
            <Footer />
        </>
    )
}