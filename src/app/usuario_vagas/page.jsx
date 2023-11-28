import Link from "next/link";
import Style from "@/src/css/vagas.module.css"
import Form from "@/src/componentes/form";
import Curriculo from "../curriculo/page";
import Conectar from "@/src/componentes/conectar";
import Vagas1 from "@/src/componentes/vagas1";
import Vagas2 from "@/src/componentes/vagas2";
import Veja from "@/src/componentes/veja";

export default function Usuario() {
  return (
    <>  
    <Conectar/>
     <Form/>
     <Vagas1 />
     <Vagas2 />
     <Veja />
    </> 
  );
}
