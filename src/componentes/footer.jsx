import Image from "next/image";
import Style from "@/src/css/Footer.module.css";
import Link from "next/link";
import Logo from "@/src/assets/img-footer/Logo_Vinculos_Redondo.png";
import Instagram from "@/src/assets/img-footer/Logo_Instagram.png";
import LinkedIn from "@/src/assets/img-footer/Logo_LinkedIn.png";
import Linktree from "@/src/assets/img-footer/Logo_Linktree.png";
import { FaArrowUpLong } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className={Style.footer}>
        {" "}
        {/*Div Footer*/}
        <div className={Style.Logo}>
          <Image src={Logo} />
        </div>{" "}
        {/*Div da logo da Footer*/}
        <div className={Style.Contatos}>
          <h1 className={Style.titulo_contato}>contato</h1>
          <h2 className={Style.Email}>falecomvinclus@gmail.com</h2>
          <h2 className={Style.Telefone}>(11) 99999-9999</h2>
        </div>{" "}
        {/*Div dos contatos da Footer*/}
        <div className={Style.Links}>
          <h1 className={Style.TituloLinks}>links</h1>
          <h2 className={Style.Inicio}>Inicio</h2>
          <h2 className={Style.Vagas}>Sobre</h2>
        </div>{" "}
        {/*Div dos links do Site*/}
        <div className={Style.redesSociais}>
          <h1 className={Style.titulo_redes}>redes sociais</h1>
          <div className={Style.icones}>
            {" "}
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
        </div>{" "}
        {/*Div das redes sociais da Footer*/}
      </footer>
      <div className={Style.Direitos}>
        <h1>Densenvolvido por Vínculos ©</h1>
        <Link href="#header">
          <button >
            <FaArrowUpLong
            className={Style.cima}
            />
          </button>
        </Link>
        
      </div>
    </>
  );
}
