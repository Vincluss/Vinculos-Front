'use client'
import Image from "next/image";
import Style from "../css/home_geral.module.css"
import ImageMain from "@/src/assets/img-efeitos/blob.png"
import Link from "next/link"

export default function HomeGeral() {
  return (
    <>
      <section className="relative">
        <div className={Style.header_colorido}>
          <div className={Style.imagem_coxinha}>
            <Image src={ImageMain} alt="Código" />
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