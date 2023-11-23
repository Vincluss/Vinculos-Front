import Style from "@/src/css/login_empresa.module.css";
import logo from "@/src/assets/logo-semfundo/5.png";
import Image from "next/image";
import Link from "next/link";

export default function LoginEmpresa(){
    return(
        <section className={Style.paginaCadastro}>
            {/* Formulário de cadastro da empresa */}
            {/* PRECISA ADICIONAR O BOTÃO DE SAIR E FAZER O RESPONSIVO */}

            {/* Saudação da página */}
            <div className={Style.caixaSaudacao}>
                <h1 className={Style.titulo}>BEM VINDO DE VOLTA!</h1>

                <h2 className={Style.subtitulo}>
                    para manter-se conectado <br/>
                    conosco, faça login com seus <br/>
                    dados pessoais
                </h2>
                <div className={Style.logo}>
                    <Image src={logo} />
                </div>
                
            </div>

            <div className={Style.caixaFormulario}>
                <h1 className={Style.tituloEmpresa}>EMPRESA</h1>
                <h1 className={Style.tituloCadastro}>ENTRAR</h1>

                {/* action serve para indicar o local que será enviado as informações do formulário */}
                <form action="/" method="post" className={Style.formulario}>

                    <label htmlFor="">EMPRESA</label><br/>
                    <input type="text" name="empresa" title="Nome da sua empresa" className={Style.estilizacaoInputs} placeholder="DIGITE O NOME DA EMPRESA" required/><br/>

                    {/* não seria melhor o email da empresa? */}
                    <label htmlFor="">EMAIL DO COLABORADOR: </label><br/>
                    <input type="email" name="email" placeholder="DIGITE O EMAIL" className={Style.estilizacaoInputs} required/><br/>

                    <label htmlFor="senha"> SENHA: </label>
                    <br></br>
                    <input className={Style.estilizacaoInputs} type="password" id="senha" name="senha" placeholder="DIGITE SUA SENHA" required></input>


                    <br></br>
                    <Link href="" ><p className={Style.Recuperacao_cadastrar}> Esqueceu a senha? clique aqui </p></Link>
                    <Link href="cadastro_empresa" ><p className={Style.Recuperacao_cadastrar}> Ainda não tem perfil? criar perfil</p></Link>
                    <div className={Style.centraalizarBtn}>
                    <Link href="home_empresa" className={Style.btn_inscrever_se} ><button type="submit" >ENTRAR</button></Link>   
                    </div>
                    
                </form>

            </div>
        </section>    
    );
}