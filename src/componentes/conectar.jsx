import Style from "../css/conectar.module.css";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

export default function Conectar() {
  return (
    <section className={Style.container_conectar}>
      <div>
        <h2 className={Style.titulo_candidato}>Candidatos</h2>
        <h2 className={Style.titulo_conecte}>Conecte-se</h2>
      </div>

      <button className={Style.botao_linkedin} aria-label="Entrar com Linkedin">
        <FaLinkedin size={50} className={Style.corIcone} />
        <p className={Style.texto_linkedin}>Entrar com Linkedin</p>
      </button>
      <button
        className={Style.botao_email}
        aria-label="Entrar com Email ou CPF"
      >
        <MdOutlineEmail size={50} className={Style.corIcone} />
        <p className={Style.texto_email}>Entrar com Email ou CPF</p>
      </button>

      <div className={Style.container_curriculo}>
        <Link
          href="/curriculo"
          className={Style.clique}
          aria-label="Baixar modelo de currículo"
        >
          Baixe seu modelo de currículo
        </Link>
        <Link
          href="/editar_perfil"
          className={`${Style.botao_editar} ${Style.containerSubline}`}
          aria-label="Editar meu perfil"
        >
          <span className={Style.subline}>Editar meu perfil</span>
        </Link>
      </div>
    </section>
  );
}
