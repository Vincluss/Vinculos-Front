'use client'
import Image from "next/image";
import Style from "../css/home_usuario.module.css"
import ImageMain from "@/src/assets/img-efeitos/blob.png"
import Link from "next/link"

export default function HomeUsuario() {
    return (
        <>
            <section className="relative">
                <div className="bg-main-empresa w-full h-[90vh] mt-[15vh] flex items-end justify-between relative">

                    <div className="w-5/12 flex items-baseline relative h-5/6">
                        <Image src={ImageMain} alt="Código" className="absolute z-10 w-full h-full" />
                    </div>

                    {/* <div className="w-2/5 pb-8 pr-8">
                    <h1 className={Style.frase2}>Encontre sua carreira conosco</h1>
                        <form className={Style.formulario}>
                            <input className={Style.email} type="text" placeholder="insira seu email" name="name" />
                            <button className={Style.botao2} type="submit">Enviar</button>
                        </form>
                    </div> */}
                </div>
            </section>
        </>
    )
}
