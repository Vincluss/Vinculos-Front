import Footer from '@/src/componentes/Footer';
import AssinaturaHome from '@/src/componentes/assinatura_home';
import HomeEmpresa from '@/src/componentes/home_empresa';
import Link from 'next/link';


export default function Empresa() {
    return (
        <>
            <HomeEmpresa />
            <AssinaturaHome />
            <Footer />
        </>
    )
}