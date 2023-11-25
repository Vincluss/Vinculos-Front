'use client'
import Image from "next/image";
import Style from "../css/home_empresa.module.css"
import Comeco from '@/src/assets/img-efeitos/cima_escuro.png'
import ImageMain from "@/src/assets/img-efeitos/blob.png"
import Link from "next/link"

export default function HomeEmpresa() {
    return (
        <>
            <section className="relative">
                <div className="bg-main-empresa w-full h-[90vh] mt-[15vh] flex items-end justify-between relative">

                    <div className="w-5/12 flex items-baseline relative h-5/6">
                        <Image src={ImageMain} alt="Código" className="absolute z-10 w-full h-full" />
                    </div>

                    <div className="w-2/5 pb-8 pr-8">
                        <h1 className={Style.frase3}>Cadastre Suas Vagas</h1>
                        <form className={Style.formulario1}>
                            <input className={Style.email1} type="text" placeholder="insira seu email" name="name" />
                            <button className={Style.botao3} type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}