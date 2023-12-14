"use client";
import Image from "next/image";
import Style from "../css/home_empresa.module.css";
import ImageMain from "@/src/assets/img-efeitos/blob.png";
import Link from "next/link";

export default function HomeEmpresa() {
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
                Cadastre suas vagas!
            </h1>
            <form className={Style.btnContainer}>
              <label htmlFor="email" className={Style.label}>
                Email:
                <input
                  type="email"
                  id="email"
                  aria-labelledby="emailLabel"
                  placeholder="Insira aqui seu email"
                  className={Style.inputForm}
                />
              </label>
              <button type="submit" className={Style.btnSubmit}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
