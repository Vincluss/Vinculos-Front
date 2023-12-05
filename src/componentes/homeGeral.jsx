'use client'
import Image from "next/image";
import Style from "../css/home_geral.module.css"
import ImageMain from "@/src/assets/img-efeitos/blob.png"
import Link from "next/link"

export default function HomeGeral() {
  return (
    <>
      <section className="relative">
        <div className="bg-main-empresa w-full flex items-end pt-32 justify-between relative">
          <div className="w-1/2 flex items-baseline relative h-300">
            <Image src={ImageMain} alt="Código" className="z-10 w-full h-full"/>
          </div>

          <div className={Style.formularioEmpresa}>
            <h1 className={Style.frase}>Faça seu cadastro e tenha acesso aos nossos serviços</h1>
            <Link href={'/home_usuario'}>
              <button className={Style.botaoCandidato}>
                Para candidatos
              </button>
            </Link>
            <Link href={'/home_empresa'}>
              <button className={Style.botaoEmpresa}>Para Empresas</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}