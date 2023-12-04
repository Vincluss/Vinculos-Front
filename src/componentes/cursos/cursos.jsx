"use client";
import { useEffect, useState } from "react";
import Style from "@/src/css/cursos_user.module.css";
import Link from "next/link";
import Image from "next/image";
import Contabilidade from "@/src/assets/img-pessoas/contabilidade.png";
import Gestao from "@/src/assets/img-pessoas/gestao.png";
import Programacao from "@/src/assets/img-pessoas/programacao.png";
import dynamic from "next/dynamic";
import DynamicRating from "@/src/componentes/cursos/rating"; // Importe corretamente o componente DynamicRating

const DynamicRatingComponent = dynamic(
  () => import("@/src/componentes/cursos/rating"),
  { ssr: false }
);

export default function Cursos() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Define isClient como true quando o componente é montado no lado do cliente
  }, []);

  return (
    <section className={Style.containerCursos}>
      <h2 className={Style.titleCursos}>Cursos</h2>

      <section className={Style.caixa}>
        <Link
          href="https://www.ev.org.br/cursos/Contabilidade-Empresarial"
          target="_blank"
          className={Style.subtitleLink}
        >
          <div className={Style.curso1}>
            <Image
              className={Style.contabilidade}
              src={Contabilidade}
              alt="Um grupo de pessoas sentadas ao redor de uma mesa com um laptop."
            />
            <div className={Style.coluna}>
              <div className={Style.titulo}>
                <h2 className={Style.contabilidade_titulo}>Contabilidade</h2>
              </div>
              <div className={Style.descricao}>
                <p className={Style.contabilidade_descricao}>
                  Este curso aborda os princípios contábeis e as técnicas de
                  registro financeiro, permitindo que os alunos entendam e
                  gerenciem as finanças de organizações de maneira eficaz.{" "}
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href="https://sebrae.com.br/sites/PortalSebrae/cursosonline/gestao-de-pessoas,eda0b8a6a28bb610VgnVCM1000004c00210aRCRD"
          target="_blank"
          className={Style.subtitleLink}
        >
          <div className={Style.curso2}>
            <Image
              className={Style.gestao}
              src={Gestao}
              alt="Uma mulher sentada em uma mesa de trabalho com livros e um tablete sobre a mesma."
            />
            <div className={Style.coluna}>
              <div className={Style.titulo}>
                <h2 className={Style.gestao_titulo}>Gestão De Equipe</h2>
              </div>
              <div className={Style.descricao}>
                <p className={Style.gestao_descricao}>
                  Este curso oferece conhecimentos essenciais sobre
                  gerenciamento de empresas e organizações. Os alunos aprendem a
                  planejar, organizar e liderar equipes.
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href="https://www.edx.org/learn/computer-programming"
          target="_blank"
          className={Style.subtitleLink}
        >
          <div className={Style.curso3}>
            <Image
              className={Style.programacao}
              src={Programacao}
              alt="Dedos digitando no teclado do computador."
            />
            <div className={Style.coluna}>
              <div className={Style.titulo}>
                <h2 className={Style.programacao_titulo}>Programação</h2>
              </div>
              <div className={Style.descricao}>
                <p className={Style.programacao_descricao}>
                  Neste curso, os participantes aprendem a criar software e
                  aplicativos através da escrita de código, para uma ampla
                  variedade de carreiras em tecnologia da informação e
                  desenvolvimento de software.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>

      <h2 className={Style.titleAvaliacao}>Sugestão/Avaliações</h2>
      <section className={Style.rating}>
        <DynamicRating />
      </section>

      <form className={Style.formulario}>
        <input
          className={Style.nome}
          type="text"
          name="nome"
          maxlength="50"
          size="50"
          required
          placeholder="Nome do curso"
        />
        <textarea
          className={Style.campo}
          cols="20"
          rows="10"
          placeholder="Comentário"
          
        ></textarea>
        <div className={Style.btnContainer}>
            <button className={Style.btnSubmit} type="submit" value="Enviar">
              Enviar
            </button>
        </div>
      </form>
    </section>
  );
}
