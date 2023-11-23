import Link from "next/link";
import Conteudo_sobre from "@/src/componentes/Conteudo_sobre";
import NossaEquipe from "@/src/componentes/nossa_equipe";
import Footer from "@/src/componentes/Footer";


export default function sobre() {
    return (
        <>
            <Conteudo_sobre />
            <NossaEquipe />
            <Footer />
        </>

    )
}