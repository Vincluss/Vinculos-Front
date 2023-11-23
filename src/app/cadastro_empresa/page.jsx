import Style from "@/src/css/cadastro_empresa.module.css";
import logo from "@/src/assets/logo-semfundo/5.png";
import Image from "next/image";
import Link from "next/link";
import { VscArrowLeft } from "react-icons/vsc";

export default function CadastroEmpresa(){
    return(
        <section className={Style.paginaCadastro}>
            {/* Formulário de cadastro da empresa */}
            {/* PRECISA FAZER O RESPONSIVO */}
            
            <div className={Style.caixaFormulario}>
                <button className={Style.btn_sair}>
                    <VscArrowLeft/>&nbsp; Sair
                </button>

                <div className={Style.containerForms}>
                    <h1 className={Style.tituloEmpresa}>EMPRESA</h1>
                    <h1 className={Style.tituloCadastro}>CADASTRE-SE</h1>

                    {/* action serve para indicar o local que será enviado as informações do formulário */}
                    <form action="/curriculo"  className={Style.formulario}>
                        <label htmlFor="" >NOME DO COLABORADOR: </label><br/>
                        <input type="text" name="nome" placeholder="DIGITE O SEU NOME" className={Style.estilizacaoInputs} required/><br/>

                        <label htmlFor="">EMAIL DO COLABORADOR: </label><br/>
                        <input type="email" name="email" placeholder="DIGITE SEU EMAIL" className={Style.estilizacaoInputs} required/><br/>

                        <label htmlFor="">EMPRESA</label><br/>
                        <input type="text" name="empresa" title="Nome da sua empresa" className={Style.estilizacaoInputs} required/><br/>

                        <label htmlFor="">CNPJ</label><br/>
                        <input type="text" name="cnpj" className={Style.estilizacaoInputs} title="Formato esperado: 00.000.000/0000-00"
                        pattern="\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}" required/>

                        <div className={Style.centraalizarBtn}>
                            <button type="submit" className={Style.btn_inscrever_se}>INSCREVER-SE</button>
                        </div>
                    </form>

                    <Link href="/login_empresa" >JÁ POSSUO UMA CONTA</Link>
                </div>

            </div>

            {/* Saudação da página */}
            <div className={Style.caixaSaudacao}>
                <h1 className={Style.titulo}>OLÁ!</h1>

                <h2 className={Style.subtitulo}>
                    insira seus dados pessoais para <br/>
                    abrir uma conta conosco
                </h2>
                <div className={Style.logo}>
                    <Image src={logo} />
                </div>
                
            </div>
        </section>    
    );
}