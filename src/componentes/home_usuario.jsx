import Image from "next/image";
import Style from "../css/home_usuario.module.css"
import Comeco from '@/src/assets/img-efeitos/grupo_cima.png'

export default function HomeUsuario() {
    return (
    <>
        <div className={Style.cima1}>
            <Image 
            src={Comeco}
            alt="comeco"
            />
        </div>

        <div className={Style.esquerda_onda1}>
            <h1 className={Style.frase2}>Encontre a Sua Carreira Conosco!</h1>
            <form className={Style.formulario}>
                <input className={Style.email} type="text" placeholder="insira seu email" name="name" />
                <button className={Style.botao2} type="submit">Enviar</button>
            </form>
        </div>
    </>
    )
}