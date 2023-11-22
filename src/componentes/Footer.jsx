import Image from "next/image"
import Style from "@/src/css/Footer.module.css"
import Link from "next/link"
import Logo from "@/src/img/Logo_Vinculos_Redondo.png"
import Instagram from "@/src/img/Logo_Instagram.png"
import LinkedIn from "@/src/img/Logo_LinkedIn.png"
import Linktree from "@/src/img/Logo_Linktree.png"


export default function Footer() {
  return (
    <footer className={Style.footer}> {/*Div Footer*/}
      <div className={Style.Logo}>
        <Image src={Logo} />
      </div> {/*Div da logo da Footer*/}

      <div className={Style.Contatos}>
        <h1 className={Style.Contato}>Contato</h1>
        <h2 className={Style.Email}>falecomvinclus@gmail.com</h2>
        <h2 className={Style.Telefone}>(11) 99999-9999</h2>
      </div> {/*Div dos contatos da Footer*/}

      <div className={Style.Links}>
        <h1 className={Style.TituloLinks}>Links</h1>
        <h2 className={Style.Inicio}>Inicio</h2>
        <h2 className={Style.Vagas}>Vagas</h2>
      </div> {/*Div dos links do Site*/}

      <div className={Style.redesSociais}>
        <h1>Redes Sociais</h1>
        <div className="icones"> {/*Caixinha só para os icones das redes sociais*/}

          <Link href="https://instagram.com/vinculoss_?igshid=MTNiYzNiMzkwZA==" target="_blank">
            <Image src={Instagram} />
          </Link>
          <Link href="https://www.linkedin.com/company/vinculoss/?viewAsMember=true" target="_blank"><Image src={LinkedIn} />
          </Link>
          <Link href="https://linktr.ee/vinculos__" target="_blank">
            <Image src={Linktree} />
          </Link>

        </div>
      </div> {/*Div das redes sociais da Footer*/}

    </footer>
  )
}