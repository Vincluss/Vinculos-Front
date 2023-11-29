import Header from "@/src/componentes/header_publico";
import Wave from "@/src/componentes/wave";
import Link from "next/link";
import VagasInclusãoEmpresa from "@/src/componentes/vagas_inclusaoEmpresa";

export default function inclusao() {
    return(

        <>
        <header className='relative'>
        <Header bgColor="#E8A023"  />
        <Wave bgColor="#E8A023" />
    </header>
        <VagasInclusãoEmpresa />


    </>
    )
}