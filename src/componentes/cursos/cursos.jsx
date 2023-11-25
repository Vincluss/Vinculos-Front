import Style from '../../css/cursos.module.css';
import Link from "next/link";
import Image from 'next/image';
import Contabilidade from '@/src/assets/img-pessoas/contabilidade.png';
import Gestao from '@/src/assets/img-pessoas/gestao.png';
import Programacao from '@/src/assets/img-pessoas/programacao.png';


export default function Cursos() {
    
    return (
      <section className={Style.container_cursos}>

      <h2 className={Style.title_cursos}>Cursos</h2>
        <Link href="/homeCandidato" className={Style.subtitle__link}>
            <section className={Style.caixa}>
                
                <div className={Style.curso1}>
                    <Image className={Style.contabilidade} src={Contabilidade} alt='deficientes na cadeira de roda' />
                    <div className={Style.coluna}>
                        <div className={Style.titulo}>
                            <h2 className={Style.contabilidade_titulo}>Contabilidade</h2>
                        </div>
                        <div className={Style.descricao}>
                            <p className={Style.contabilidade_descricao}>Este curso aborda os princípios contábeis e as técnicas de registro financeiro, permitindo que os alunos entendam e gerenciem as finanças de organizações de maneira eficaz. </p>
                        </div>
                    </div>
                </div>



                <div className={Style.curso2}>
                    <Image className={Style.gestao} src={Gestao} alt='deficientes na cadeira de roda' />
                    
                    <div className={Style.coluna}>
                        <div className={Style.titulo}>
                            <h2 className={Style.gestao_titulo}>Gestão De Equipe</h2>
                        </div>
                        <div className={Style.descricao}>
                            <p className={Style.gestao_descricao}>Este curso oferece conhecimentos essenciais sobre gerenciamento de empresas e organizações. Os alunos aprendem a planejar, organizar e liderar equipes.</p>
                        </div>
                    </div>
                </div>



                <div className={Style.curso3}>
                    <Image className={Style.programacao} src={Programacao} alt='deficientes na cadeira de roda' />
                    <div className={Style.coluna}>
                        <div className={Style.titulo}>
                            <h2 className={Style.programacao_titulo}>Programação</h2>
                        </div>
                        <div className={Style.descricao}>
                            <p className={Style.programacao_descricao}>Neste curso, os participantes aprendem a criar software e aplicativos através da escrita de código, para uma ampla variedade de carreiras em tecnologia da informação e desenvolvimento de software.</p>
                        </div>
                    </div>
                </div>

            </section>
            
          
        </Link>

        <h2 className={Style.title_avaliacao}>Sugestão/Avaliações</h2>
        <section className={Style.rating}>
        

        </section>
        <section className={Style.label}>
            <div className={Style.nome}>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required />
            </div>

            <div className={Style.nome}>

            </div>

        </section>




      </section>

        
    );
  }

