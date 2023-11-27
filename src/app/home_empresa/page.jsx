import Footer from '@/src/componentes/footer';
import AssinaturaHome from '@/src/componentes/assinatura_home';
import HomeEmpresa from '@/src/componentes/home_empresa';
import Link from 'next/link';
import Header from '@/src/componentes/header_publico';
import WaveEmpresa from '@/src/componentes/wave_empresa';
import ResultadoEmpresa from '@/src/componentes/resultado_empresa';

export default function Empresa() {
    return (
        <>
            <header className='relative'>
                <Header bgColor="#243B53"/>
                <WaveEmpresa />
            </header>
            <HomeEmpresa/>
            <ResultadoEmpresa />
            <AssinaturaHome />
            <Footer />
        </>
    )
}