import Footer from '@/src/componentes/footer';
import AssinaturaHome from '@/src/componentes/assinatura_home';
import HomeEmpresa from '@/src/componentes/home_empresa';
import Link from 'next/link';
import Header from '@/src/componentes/header_publico';
import ResultadoEmpresa from '@/src/componentes/resultado_empresa';
import InclusaoEmpresa from '@/src/componentes/candidato_empresa';
import Wave from '@/src/componentes/wave';

export default function Empresa() {
    return (
        <>
            <header className="relative">
                <Header bgColor="#243B53"/>
                <Wave bgColor="#243B53"/>
            </header>
            <HomeEmpresa/>
            <ResultadoEmpresa />
            <InclusaoEmpresa />
            <AssinaturaHome />
            <Footer />
        </>
    )
}