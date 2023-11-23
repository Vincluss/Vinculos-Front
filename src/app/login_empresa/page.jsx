import Link from 'next/link';
import Loginempresa from '@/src/componentes/login_empresa';


export default function Home() {
    return (
        <>
        <Loginempresa />
        </>
    )
}
import Style from "@/src/css/login_empresa.module.css"

export default function LoginEmpresa(){
    return(
        <section className={Style.paginaLogin}>
            Deu bom
        </section>    
    );
}