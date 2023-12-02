import Footer from '@/src/componentes/footer';
import AssinaturaHome from '@/src/componentes/assinatura_home';
import HomeEmpresa from '@/src/componentes/home_empresa';
import HeaderUser from '@/src/componentes/headerUser';
import ResultadoEmpresa from '@/src/componentes/resultado_empresa';
import InclusaoEmpresa from '@/src/componentes/candidatoEmpresa';
import Wave from '@/src/componentes/wave';
import VLibras from "@/src/componentes/vlibras";

export default function Empresa() {
    return (
        <>
            <header className="relative">
                <HeaderUser bgColor="#243B53"/>
                <Wave position={"absolute"} bgColor="#243B53"/>
            </header>
            <HomeEmpresa/>
            <ResultadoEmpresa />
            <InclusaoEmpresa />
            <AssinaturaHome />
            <Footer />
            <VLibras forceOnload={true} />
        </>
    )
}