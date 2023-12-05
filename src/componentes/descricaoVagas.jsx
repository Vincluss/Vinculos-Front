import Style from "@/src/css/descricao_vaga.module.css";
import Image from "next/image";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsFillGeoAltFill } from "react-icons/bs";
import { CgUiKit } from "react-icons/cg";
import Link from "next/link";

export default function DescricaoVagas() {
  return (
    <section className={Style.containerDescricaoVaga}>
      <h1 className={Style.titulo}>Descrição Da Vaga</h1>

      <div className={Style.conteudoVaga}>
        <div className={Style.caixa}></div>

        <h2 className={Style.tituloVaga}>
          Administrador Banco De <br />
          Dados III - Sql Server - <br />
          Home Office
        </h2>
      </div>

      <div className={Style.descricao}>
        <div className={Style.formatacaoIcones}>
          <MdOutlineAttachMoney className={Style.icon} /> <h2 className={Style.iconText}>Salário</h2>
        </div>
        <div className={Style.formatacaoIcones}>
          <BsFillGeoAltFill className={Style.icon} /> <h2 className={Style.iconText}>São Paulo</h2>
        </div>
        <div className={Style.formatacaoIcones}>
          <CgUiKit className={Style.icon} /> <h2 className={Style.iconText}>Regime - CLT</h2>
        </div>

        <h2 className={Style.subtitulos}>DESCRIÇÃO:</h2>
        <p className={Style.paragrafo}>
          {" "}
          Administrar banco de dados em ambiente Azure Cloud;{" "}
        </p>
        <p className={Style.paragrafo}>
          {" "}
          Criando e desenvolvendo objetos, tabelas, <br /> procedures, views,
          triggers, jobs, e pacotes de SSIS.;{" "}
        </p>
        <p className={Style.paragrafo}>
          {" "}
          Manutenção das bases em SQL Server e PostgreSQL;{" "}
        </p>
        <p className={Style.paragrafo}>
          {" "}
          Construindo otimização de queries, índices e objetos de banco de dados
          e Infraestrutura;{" "}
        </p>

        <h2 className={Style.subtitulos}>REQUISITOS:</h2>
        <ul>
          <li className={Style.lista}>
            Experiência com Metodologia Itil e de Gestão de Projetos (PMI e
            Agile);
          </li>
          <li className={Style.lista}>
            Conhecimento em Administração de Banco de Dados SQL Server:
            Instalação, Gerenciamento de Acessos, Backup, Restore, Alertas,
            Monitoramento, Performance, Suporte a Equipe de negócios;
          </li>
          <li className={Style.lista}>
            Perfil pró-ativo, excelente comunicação;
          </li>
        </ul>

        <h2 className={Style.subtitulos}>EMPRESA:</h2>
        <p className={Style.paragrafo}>
          A Johnson Controls é uma empresa multi-industrial global, líder em
          tecnologia diversificada, que atende a diversos clientes em mais de
          150 países. Somos uma empresa que valoriza o diferente. Se você se
          identifica com alguma etnia, diversidade de gênero ou se é um
          profissional com deficiência, lhes damos as boas-vindas!!! Queremos
          você para fazer a diferença em nosso time! Candidate-se as nossas
          vagas para construirmos juntos um ambiente mais colorido e diverso!
        </p>
      </div>
      <Link href="">
        <button type="submit" className={Style.btnAplicar}>
          Aplicar
        </button>
      </Link>
    </section>
  );
}
