import Link from 'next/link';
import Loginempresa from '@/src/componentes/loginEmpresa';
import VLibras from "@/src/componentes/vlibras";


export default function Home() {
    return (
        <>
            <Loginempresa />
            <VLibras forceOnload={true} />
        </>
    )
}