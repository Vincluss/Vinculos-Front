"use client";
import Image from "next/image";
import Style from "../css/homeUser.module.css";
import ImageMain from "@/src/assets/img-efeitos/blob.png";
import Link from "next/link";

export default function HomeUsuario() {
  return (
    <>
      <section className={Style.homeGeral}>
        <div className={Style.contentContainer}>
          <div className={Style.imageContainer}>
            <Image
              src={ImageMain}
              alt="Código"
              className={`z-10 w-full h-full ${Style.image}`}
            />
          </div>

          <div className={Style.formularioEmpresa}>
            <h1 className={Style.frase}>
              Faça seu cadastro e tenha acesso aos nossos serviços
            </h1>
            <div className={Style.btnContainer}>
              <Link href={"/home_usuario"} className={Style.btnCandidato}>
                Para candidatos
              </Link>
              <Link href={"/home_empresa"} className={Style.btnEmpresa}>
                Para empresas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

          {/* <div className={Style.FormularioEmpresa}>
            <h1 className={Style.frase2}>Encontre sua carreira conosco</h1>
            <form className={Style.formulario}>
              <input
                className={Style.email}
                type="text"
                placeholder="insira seu email"
                name="name"
              />
              <button className={Style.botao2} type="submit">
                Enviar
              </button>
            </form>
          </div> */}