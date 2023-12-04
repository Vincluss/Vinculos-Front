"use client"
import PlanoAssinatura from "@/src/componentes/checkout";
import Footer from "@/src/componentes/footer";
import Header from "@/src/componentes/header_publico";
import Pagamento from "@/src/componentes/pagamento";
import Wave from "@/src/componentes/wave";
import VLibras from "@/src/componentes/vlibras";

import Visa from "./assets/visa.png"
import Paypal from "./assets/paypal.png"
import Master from "./assets/mastercard.png"


import { useState } from "react";
import Image from "next/image";

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

            <div className="bg-[#6689B1] w-[80%] h-[65vh] rounded-md flex flex-col items-center">

                <h3 className="text-center font-semibold mt-10 text-lg text-white">Cartão</h3>

                <div className="flex justify-between gap-14 items-center h-10 mt-10 mb-14 ">
                    <Image src={Visa} className="h-20 w-auto hover:scale-110 duration-100" />
                    <Image src={Master} className="h-14 w-auto hover:scale-105 duration-100" />
                    <Image src={Paypal} className="h-20 w-auto hover:scale-110 duration-100" />
                </div>

                <div className="w-4/5 ">
                    <input type="text" className=" pl-5 py-4 mb-5 w-full rounded-md" placeholder="Nome do impresso no cartão" />
                    <input type="tel" className=" pl-5 py-4 mb-5 w-full rounded-md" placeholder="Número do cartão"  />
                    <div className="flex w-full justify-between">
                        <input type="month" className=" px-5 py-4 w-[47.5%] rounded-md" />
                        <input type="password" className=" px-5 py-4 w-[47.5%] rounded-md" placeholder="CVV" />
                    </div>

                </div>

                <button className="bg-[#E8A023] w-4/5 py-3 text-white font-semibold hover:translate-y-1 duration-150 rounded-md mt-20">Pagar</button>

            </div>
        </Pagamento>

        <VLibras forceOnload={true} />
        <Footer bgColor="#243B53"/>
    </section>
);
}