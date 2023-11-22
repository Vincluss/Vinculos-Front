import Style from "../css/login_usario.module.css"
import Image from "next/image";
import Logo from '@/src/assets/logo-fundo/5.png'
import Link from 'next/link';

export default function Login() {
    return (

<div className={Style.Page}> 

    <div className={Style.Logo}>
        <h2 className={Style.Titulo}> BEM VINDO DE VOLTA!</h2> 
        <p className={Style.Subtitulo}> Para manter-se conectado conosco, faça login com seus dados pessoais. </p> 
         <Image className={Style.Redonda}
         src={Logo}
         alt="Logo da vinculos comportos por um abraço"
         />

    </div>

    <div className={Style.Dados}>

       <Link href=""><button className={Style.Buttonsair}> SAIR </button></Link> 

        <h2 className={Style.SubtituloForms}> USUÁRIO </h2>
        <h1 className={Style.TituloForms}> ENTRAR </h1>

        <form className={Style.Formulario} action="/processar-login" method="post" required>
        <label className={Style.Label} for="email"> EMAIL: </label>

        <br></br>

        <input className={Style.Inputs} type="email" id="email" name="email" placeholder="DIGITE SEU EMAIL" required></input>
        <br></br>
    
        <label className={Style.Label} for="senha"> SENHA: </label>

        <br></br>

        <input className={Style.Inputs} type="password" id="senha" name="senha" placeholder="DIGITE SUA SENHA" required></input>
        </form>

        <br></br>
        <Link href="" ><p className={Style.Recuperacao_cadastrar}> Esqueceu a senha? clique aqui </p></Link>
        <Link href="" ><p className={Style.Recuperacao_cadastrar}> Ainda não tem perfil? criar perfil</p></Link>
        <Link href="" > <button className={Style.ButEntrar} type="submit" onClick="enviar formulario()"> ENTRAR </button></Link>
        
        
    </div>

</div>
    );
}
