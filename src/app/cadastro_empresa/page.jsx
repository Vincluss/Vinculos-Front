import Style from "@/src/css/cadastro_empresa.module.css"
import logo from "@/src/assets/logo-semfundo/5.png"
import Image from "next/image";

export default function CadastroEmpresa(){
    return(
        <section className={Style.paginaCadastro}>
            {/* Formulário */}
            <div className={Style.caixaFormulário}>
                <h1>EMPRESA</h1>
                <h1></h1>
            </div>

            {/* Saudação da página */}
            <div className={Style.caixaSaudacao}>
                <h1>BEM VINDO DE VOLTA!</h1>

                <h2>
                    para manter-se conectado <br/>
                    conosco, faça login com seus <br/>
                    dados pessoais
                </h2>
                <div className={Style.logo}>
                    <Image src={logo} />
                </div>
                
            </div>
        </section>    
    );
}