import Style from '../css/cadastro_usuario.module.css'
import Image from "next/image";
import Logo from '@/src/assets/logo-fundo/5.png'
import Link from 'next/link';

export default function Caduser() {
    return (

<div className={Style.Page}> 

    <div className={Style.Dados}>

       <Link href=""><button className={Style.Buttonsair}> SAIR </button></Link> 

        <h2 className={Style.SubtituloForms}> USUÁRIO </h2>
        <h1 className={Style.TituloForms}> CADASTRE-SE </h1>

        <form className={Style.Formulario} action="/processar-login" method="post" required>
        <label className={Style.Label} for="email"> EMAIL: </label>

        <br></br>

        <input className={Style.Inputs} type="email" id="email" name="email" placeholder="DIGITE SEU EMAIL" required></input>
        <br></br>
    
        <label className={Style.Label} for="senha"> SENHA: </label>

        <br></br>

        <input className={Style.Inputs} type="password" id="senha" name="senha" placeholder="DIGITE SUA SENHA" required></input>
        <input className={Style.Inputs} type="password" id="senha" name="senha" placeholder="CONFIRME SUA SENHA" required></input>

        <br></br>

        <label className={Style.Label} for="senha"> CPF: </label>
        <br></br>
        <input className={Style.Inputs} type="text" pattern='[0-9]' id="cpf" name="cpf" placeholder="DIGITE A APENAS NUMEROS" required></input>

        </form>

        <br></br>
        <input className={Style.Inputcheck} type="checkbox" id="termos" name="termos" required></input>
        <Link href=""> Li e aceito os TERMOS DE USO </Link>
         <br></br>
        <Link href="" > <button className={Style.ButEntrar} type="submit" onClick="enviar formulario()"> INSCREVER-SE </button></Link>
        
        
    </div>

    <div className={Style.Logo}>
        <h2 className={Style.Titulo}> OLÁ!</h2> 
        <p className={Style.Subtitulo}> Insira seus dados pessoais para abrir uma conta conosco. </p> 
         <Image className={Style.Redonda}
         src={Logo}
         alt="Logo da vinculos comportos por um abraço"
         />

    </div>

</div>
    );
}
