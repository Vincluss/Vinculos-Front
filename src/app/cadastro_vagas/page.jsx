import Footer from "@/src/componentes/footer";
import Style from "@/src/css/cadastrar_vagas.module.css"

export default function CadastrarVagas(){
    return(
        <section className={Style.cadastrarVagas}>
            

            <div className="">
                <h1 className={Style.tituloCadastro}>Cadastrar Vaga</h1>
            </div>

            <Footer/>
        </section>    
    );
}