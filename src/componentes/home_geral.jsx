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
          <div className="w-6/12 flex items-baseline relative h-300">
            <Image src={ImageMain} alt="Código" className="z-10 w-full h-full"/>
          </div>

          <div className={Style.FormularioEmpresa}>
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