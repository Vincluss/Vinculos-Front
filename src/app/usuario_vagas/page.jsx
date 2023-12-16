import Link from "next/link";
import Form from "@/src/componentes/form";
import Conectar from "@/src/componentes/conectar";
import Wave from "@/src/componentes/wave";
import VagasCandidato from "@/src/componentes/vagasCandidato";
import Style from "../../css/vagasCandidato.module.css";
import Footer from "@/src/componentes/footer";
import VLibras from "@/src/componentes/vlibras";
import HeaderUser from "@/src/componentes/header/headerUser";

export default function Usuario() {
  return (
    <>
      <header className="relative">
        <HeaderUser bgColor="#003786" />
        <Wave position={"relative"} bgColor="#003786" />
      </header>
      <Conectar />
      <Form />
      <div className={Style.alinhamento}>
        <div className={Style.vagasContainer}>
          <VagasCandidato
            Empresa={"empresa"}
            Local={"Santana de P. | SP"}
            Salario={"R$ 2.320,00"}
            Vaga={"Vaga de Estágio"}
          />
          <VagasCandidato
            Empresa={"empresa"}
            Local={"São Paulo | SP"}
            Salario={"R$ 2.320,00"}
            Vaga={"Vaga de Estágio"}
          />
          <VagasCandidato
            Empresa={"empresa"}
            Local={"São Paulo | SP"}
            Salario={"R$ 1.650,00"}
            Vaga={"Vaga de Estágio"}
          />
        </div>
        <div className={Style.vagasContainer}>
          <VagasCandidato
            Empresa={"empresa"}
            Local={"Santana de P. | SP"}
            Salario={"R$ 2.320,00"}
            Vaga={"Vaga de Estágio"}
          />
          <VagasCandidato
            Empresa={"empresa"}
            Local={"São Paulo | SP"}
            Salario={"R$ 2.320,00"}
            Vaga={"Vaga de Estágio"}
          />
          <VagasCandidato
            Empresa={"empresa"}
            Local={"São Paulo | SP"}
            Salario={"R$ 1.650,00"}
            Vaga={"Vaga de Estágio"}
          />
        </div>
      </div>
      <div className={Style.vejaContainer}>
        <Link href="/descricao_vagas" className={Style.veja}>
          Veja Mais
        </Link>
      </div>

      <Footer bgColor={"#003786"} />
      <VLibras forceOnload={true} />
    </>
  );
}
