import Style from "@/src/css/Footer.module.css"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className={Style.footer}> {/*Div Footer*/}
      <div className={Style.Logo}></div> {/*Div da logo da Footer*/}
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
        <h2></h2>
      </div> {/*Div das redes sociais da Footer*/}
    </footer>
  )
}