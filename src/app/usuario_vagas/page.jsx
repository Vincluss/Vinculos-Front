import Link from "next/link";
import Form from "@/src/componentes/form";
import Conectar from "@/src/componentes/conectar";
import Header from "@/src/componentes/header_publico";
import Wave from "@/src/componentes/wave";
import VagasCandidato from "@/src/componentes/vagasCandidato";
import Style from "@/src/css/vagasCandidato.module.css";
import Footer from "@/src/componentes/footer";

export default function Usuario() {
  return (
    <>
      <header className="relative">
        <Header bgColor="#003786" />
        <Wave position={"relative"} bgColor="#003786"/>
      </header>
        <Conectar/>
        <Form/>
        <div className={Style.alinhamento}>
          <div>
            <VagasCandidato Empresa={"empresa"} Local={"Santana de P. | SP"} Salario={"R$ 2.320,00"} Vaga={"Vaga de Estágio"}/>
            <VagasCandidato Empresa={"empresa"} Local={"São Paulo | SP"} Salario={"R$ 2.320,00"} Vaga={"Vaga de Estágio"}/>
          </div>
          <div>
            <VagasCandidato Empresa={"empresa"} Local={"São Paulo | SP"} Salario={"R$ 1.650,00"} Vaga={"Vaga de Estágio"}/>
            <VagasCandidato Empresa={"empresa"} Local={"Santana de P. | SP"} Salario={"R$ 2.320,00"} Vaga={"Vaga de Estágio"}/>
          </div>
          <div>
            <VagasCandidato Empresa={"empresa"} Local={"São Paulo | SP"} Salario={"R$ 2.320,00"} Vaga={"Vaga de Estágio"}/>
            <VagasCandidato Empresa={"empresa"} Local={"São Paulo | SP"} Salario={"R$ 1.650,00"} Vaga={"Vaga de Estágio"}/>
          </div>
        </div>
        <div className={Style.vejaContainer}>
        <button className={Style.veja}>Veja Mais</button>
        </div>
        <Footer />
    </> 
  );
}
