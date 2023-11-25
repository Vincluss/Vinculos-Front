"use client"
import PlanoAssinatura from "@/src/componentes/checkout";
import Footer from "@/src/componentes/footer";
import Header from "@/src/componentes/header_publico";
import Pagamento from "@/src/componentes/pagamento";
import Wave from "@/src/componentes/wave";
import VLibras from "@/src/componentes/vlibras";


import { useState } from "react";

export default function Home(){
    const [abrirModal, setAbrirModal] = useState(false);

    const botaoAbrirModal = () => {
        setAbrirModal(true);
    }

    const botaoFecharModal = () => {
        setAbrirModal(false);
    }

return (
    <section className="">
        <header className="relative">
            <Header bgColor="#243B53"/>
            <Wave position={"relative"} bgColor="#243B53"/>
        </header>

        <PlanoAssinatura />
        
        <button onClick={botaoAbrirModal}>Abrir Modal</button>

        <Pagamento aberto={abrirModal} fechar={botaoFecharModal}>

            <h1 className="uppercase text-center font-bold mt-2 mb-5 text-2xl">pagamento</h1>

            <div className="bg-[#243B53] w-[80%] h-[65vh] rounded-md">

                <h3 className="text-center font-semibold mt-10 text-lg text-white">Cartão</h3>

            </div>
        </Pagamento>

        <VLibras forceOnload={true} />
        <Footer />
    </section>
);
}