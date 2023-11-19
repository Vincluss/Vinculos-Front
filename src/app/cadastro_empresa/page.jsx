import Style from "@/src/css/cadastro_empresa.module.css"
import logo from "@/src/assets/logo-semfundo/5.png"
import Image from "next/image";

export default function CadastroEmpresa(){
    return(
        <section>
            {/* Formulário */}
            <div className={Style.caixaFormulário}>
                <h1>EMPRESA</h1>
            </div>

            {/* Saudação da página */}
            <div className={Style.caixaSaudacao}>
                <Image src={logo}/>
            </div>
        </section>    
    );
}