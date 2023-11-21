import Image from "next/image";
import Style from "../css/home_empresa.module.css"
import Comeco from '@/src/assets/img-efeitos/cima_escuro.png'

export default function HomeEmpresa() {
    return (
        <>
            <div className={Style.cima2}>
                <Image 
                src={Comeco}
                alt="comeco"
                />
            </div>

            <div className={Style.esquerda_onda2}>
                <h1 className={Style.frase3}>Cadastre Suas Vagas</h1>
                <form className={Style.formulario1}>
                    <input className={Style.email1} type="text" placeholder="insira seu email" name="name" />
                    <button className={Style.botao3} type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}