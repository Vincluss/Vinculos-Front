import Image from "next/image";
import Style from "../css/Footer.module.css";
import Link from "next/link";
import Logo from "@/src/assets/img-footer/Logo_Vinculos_Redondo.png";
import Instagram from "@/src/assets/img-footer/Logo_Instagram.png";
import LinkedIn from "@/src/assets/img-footer/Logo_LinkedIn.png";
import Linktree from "@/src/assets/img-footer/Logo_Linktree.png";
import { FaArrowUpLong } from "react-icons/fa6";

export default function Footer({ bgColor }) {
  return (
    <>
      <footer className={Style.footer}>
        {/*Div Footer*/}
        <div className={Style.footerContainer}>
          <div className={Style.logo}>
            <Link href="/">
              <Image src={Logo} />
            </Link>
          </div>
          {/*Div da logo da Footer*/}
          <div className={Style.contatos}>
            <h1 className={Style.titulo_contato}>contato</h1>
            <Link href="mailto:falecomvinclus@gmail.com">
              <h2 className={Style.email}>falecomvinclus@gmail.com</h2>
            </Link>
            <h2 className={Style.telefone}>(11) 99999-9999</h2>
          </div>
          {/*Div dos contatos da Footer*/}
          <div className={Style.links}>
            <h1 className={Style.tituloLinks}>Links</h1>
            <Link href="/">
              <h2 className={Style.inicio}>Inicio</h2>
            </Link>
            <Link href="/sobre">
              <h2 className={Style.sobre}>Sobre</h2>
            </Link>
          </div>
          {/*Div dos links do Site*/}
          <div className={Style.redesSociais}>
            <h1 className={Style.titulo_redes}>Redes sociais</h1>
            <div className={Style.icones}>
              {/*Caixinha só para os icones das redes sociais*/}
              <Link
                href="https://instagram.com/vinculoss_?igshid=MTNiYzNiMzkwZA=="
                target="_blank"
              >
                <Image src={Instagram} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/vinculoss/?viewAsMember=true"
                target="_blank"
              >
                <Image src={LinkedIn} />
              </Link>
              <Link href="https://linktr.ee/vinculos__" target="_blank">
                <Image src={Linktree} />
              </Link>
            </div>
          </div>
        </div>
        {/*Div das redes sociais da Footer*/}
      </footer>
      <div
        className={`${Style.direitosContainer}`}
        style={{ backgroundColor: `${bgColor}` }}
      >
        <h1 className={Style.direitos}>Densenvolvido por Vínculos ©</h1>
        <Link href="#header">
          <button
            type="button"
            className=""
            aria-label="Voltar para o cabeçalho"
          >
            <FaArrowUpLong className={Style.cima} />
          </button>
        </Link>
      </div>
    </>
  );
}
