import Link from "next/link";
import Form from "@/src/componentes/form";
import Conectar from "@/src/componentes/conectar";
import Header from "@/src/componentes/header_publico";
import Wave from "@/src/componentes/wave";
import VagasCandidato from "@/src/componentes/vagasCandidato";

export default function Usuario() {
  return (
    <>
      <header className="relative">
        <Header bgColor="#003786" />
        <Wave position={"relative"} bgColor="#003786"/>
      </header>
        <Conectar/>
        <Form/>
        <section>
          <VagasCandidato />
        </section>
    </> 
  );
}
