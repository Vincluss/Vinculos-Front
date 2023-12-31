'use client'

import Style from "../css/formulario.module.css";
import Link from 'next/link';
import { ModalCandidatos } from "./modalCandidatos";
import { useState } from "react";

import { Daniele } from "./modalCandidatosInfo";

export default function Candidato() {
  const [showUser, setShowUser] = useState(null);

  const toggleUser = () => {
    setShowUser(Daniele[0]);
  }

  const closeModal = () => {
    setShowUser(null)
  }

  return (
    <>
      <section className={Style.container}>
        <form className={Style.caixa_pequena1}>

          <label className={Style.label}>Nome Completo
            <input type="text" required placeholder="digite seu nome" className={Style.inputStyle} />
          </label>

          <label className={Style.label}>Email:
            <input type="text" required placeholder="digite seu email" className={Style.inputStyle} />
          </label>

          <label className={Style.label}>Telefone Principal
            <input type="text" required placeholder="(11) 9999-99999" className={Style.inputStyle} />
          </label>

          <label className={Style.label}>Qual é o seu CEP?
            <input type="text" required placeholder="00000-0000" className={Style.inputStyle} />
          </label>

          <label className={Style.label}>Logradouro (Rua, avenida..)
            <input type="text" placeholder="digite sua rua" className={Style.inputStyle} />
          </label>

          <label className={Style.label}>Sua cidade
            <input type="text" placeholder="são paulo - SP" className={Style.inputStyle} />
          </label>

          <div className={Style.diferente}>
            <label className={Style.label}>Bairro
              <input type="text" placeholder="digite seu bairro" className={Style.bairro} />
            </label>

            <label className={Style.label}>Numero
              <input type="number" placeholder="ex:200" className={Style.numero} />
            </label>
          </div>

          <label className={Style.label}>Complemento
            <input type="text" placeholder="ex: casa 3" className={Style.inputStyle} />
          </label>

          <label className={Style.label}>data de nascimento (idade minima 14 anos)
            <input type="date" required placeholder="DD/MM/AAAA" className={Style.inputStyle} />
          </label>

          <label htmlFor="" className={Style.titulo_area}>Área De Atuação</label>
          <div className={Style.tags}>
            <input list="areas_atuacao" placeholder="Selecione Uma Tag" required className={Style.estilizacaoTags} />
            <datalist id="areas_atuacao">
              <option value="Administração"></option>
              <option value="Desenvolvedor Junior"></option>
              <option value="Financeiro"></option>
            </datalist>
            <input list="areas_atuacao" placeholder="Selecione Uma Tag" required className={Style.estilizacaoTags} />
            <datalist id="areas_atuacao">
              <option value="Administração"></option>
              <option value="Desenvolvedor Junior"></option>
              <option value="Financeiro"></option>
            </datalist>
            <input list="areas_atuacao" placeholder="Selecione Uma Tag" required className={Style.estilizacaoTags} />
            <datalist id="areas_atuacao">
              <option value="Administração"></option>
              <option value="Desenvolvedor Junior"></option>
              <option value="Financeiro"></option>
            </datalist>
          </div>

          <label className={Style.label}>Gênero:
            <select className={Style.inputStyle} >
              <option value="">Selecione...</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="hibrido">Outro</option>
            </select>
          </label>

          <label className={Style.label}>Escolha o Estado Civil:
            <select className={Style.inputStyle} >
              <option value="">Selecione...</option>
              <option value="solteiro">Solteiro/(a)</option>
              <option value="casado">Casado/(a)</option>
              <option value="divorciado">Divorciado/(a)</option>
              <option value="viuvo">Viúvo/(a)</option>
            </select>
          </label>

          <label>Sobre:
            <textarea className={Style.tamanho_sobre} required cols="20" rows="10" placeholder="exemplo: sou formada em tecnologia da informação..."></textarea>
          </label>

          <label>Conhecimentos:
            <textarea className={Style.tamanho_campo} required cols="20" rows="10" placeholder="digite 3 conhecimentos mais importantes"></textarea>
          </label>
          <button className={Style.botao_visualizar} onClick={toggleUser}>Visualizar</button>
          <Link href="/usuario_vagas"><button className={Style.botao_voltar}>Voltar</button></Link>

          {showUser && <ModalCandidatos {...showUser} onClose={closeModal} />}
        </form>
      </section>
    </>
  );
}
