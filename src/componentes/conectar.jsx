import Style from "../css/conectar.module.css";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Conectar() {
  return (
    <section className={Style.container_conectar}>
        <div>
          <h2 className={Style.titulo_candidato}>Candidatos</h2>
          <h2 className={Style.titulo_conecte}>Conecte-se</h2>
        </div>

        <button className={Style.botao_linkedin}>
          <FaLinkedin size={50} className={Style.corIcone}/> 
          <p className={Style.texto_linkedin}>Entrar com Linkedin</p>
        </button>
        <button className={Style.botao_email}>
          <MdOutlineEmail size={50} className={Style.corIcone}/> 
          <p className={Style.texto_email}>Entrar com Email ou CPF</p>
        </button>

        <div>
          <button className={Style.botao_editar}>Editar Meu Perfil</button>
          <h2 className={Style.baixe}>Baixe seu Modelo de Currículo</h2>
          <button className={Style.clique}>Clique Aqui</button>
        </div>
    </section>
  );
}