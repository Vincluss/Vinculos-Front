import Image from "next/image";
import Style from "../css/home_geral.module.css"
import Comeco from '@/src/assets/img-efeitos/grupo_cima.png'

export default function HomeGeral() {
  return (
    <>
        <div className={Style.cima}>
            <Image 
            src={Comeco}
            alt="comeco"
            />
        </div>

        <div className={Style.esquerda_onda}>
            <h1 className={Style.frase}>Faça Seu Cadastro e Tenha Acesso Aos <br/> Serviços</h1>
            <button className={Style.botao_candidato}>Para Candidatos</button>
            <button className={Style.botao_empresa}>Para Empresas</button>
        </div>
    </>
  )
}