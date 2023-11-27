'use client'
import Image from "next/image";
import Style from "../css/home_geral.module.css"
import ImageMain from "@/src/assets/img-efeitos/blob.png"
import Link from "next/link"

export default function HomeGeral() {
  return (
    <>
      <section className="relative">
        <div className="bg-main-empresa w-full h-[90vh] mt-[15vh] flex items-end justify-between relative">

          <div className="w-5/12 flex items-baseline relative h-5/6">
            <Image src={ImageMain} alt="Código" className="absolute z-10 w-full h-full" />
          </div>

          <div className="w-2/5 pb-8 pr-8">
            <h1 className={Style.frase}>Faça Seu Cadastro e Tenha Acesso Aos <br/> Serviços</h1>
            <Link href={'/home_usuario'}>
              <button className={Style.botao_candidato}>
                Para candidatos
              </button>
            </Link>
            <Link href={'/home_empresa'}>
              <button className={Style.botao_empresa}>Para Empresas</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}