import Style from "@/src/css/Footer.module.css"

export default function Footer(){
    return(
        <footer className={Style.footer}> {/*Div Footer*/}
  <div className={Style.Logo}></div> {/*Div da logo da Footer*/}
  <div className={Style.Contatos}>
    <h1>Contato</h1></div> {/*Div dos contatos da Footer*/}
    <div className={Style.Links}></div> {/*Div dos links do Site*/}
  <div className={Style.redesSociais}></div> {/*Div das redes sociais da Footer*/}
</footer>
    )
}