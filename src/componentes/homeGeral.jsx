"use client";
import Image from "next/image";
import Style from "../css/homeGeral.module.css";
import ImageMain from "@/src/assets/img-pcds/blob.png";
import Link from "next/link";

export default function HomeGeral() {
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
              <Link href={"/cadastro_usuario"} className={Style.btnCandidato}>
                Para candidatos
              </Link>
              <Link href={"/cadastro_empresa"} className={Style.btnEmpresa}>
                Para empresas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
