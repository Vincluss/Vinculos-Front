'use client'

import React, { useState } from "react";
import Image from "next/image";
import Style from "../css/match_empresa.module.css";
import Dani from "@/public/img/img-pessoas/img-inclusao1.png"
import Gus from "@/public/img/img-pessoas/img-inclusao2.png"
import Danilo from "@/public/img/img-pessoas/img-inclusao3.png"
import { ModalCandidatos } from "./modal_candidatos";

import { Daniele, Gustavo, DaniloModal } from "./modalCandidatosInfo";

const CandidatosProps = ({ imagemCandidato, nomeCandidato, matchPorcentagem, candidato, onSaibaMais }) => {

  return (
    <div className={Style.candidatosContent}>
      <div className={Style.candidatosImagem}>
        <Image
          src={imagemCandidato}
          alt={nomeCandidato}
          priority
          width={200}
          height={200}
        />
      </div>
      <div className={Style.candidatosInfo}>
        <h3>{nomeCandidato}</h3>
        <p>Possui Um Match de {matchPorcentagem}% Com Sua Vaga De Estágio</p>
        <button className={Style.saibaMais} onClick={() => onSaibaMais(candidato)}>
          Saiba Mais
        </button>
      </div>
    </div>
  )
}

export default function Candidatos() {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [displayText, setDisplayText] = useState('Ver Mais');

  const vejaMais = () => {
    setMostrarTodos(!mostrarTodos);
    setDisplayText(mostrarTodos ? 'Ver Mais' : 'Ocultar')
  }

  const candidatos = [
    { imagemCandidato: Dani, nomeCandidato: 'Daniele Almeida', matchPorcentagem: '50', candidato: Daniele },
    { imagemCandidato: Gus, nomeCandidato: 'Gustavo Renato', matchPorcentagem: '70', candidato: Gustavo },
    { imagemCandidato: Danilo, nomeCandidato: 'Danilo Santos', matchPorcentagem: '80', candidato: DaniloModal },

    { imagemCandidato: Dani, nomeCandidato: 'Daniele Almeida', matchPorcentagem: '50', candidato: Daniele },
    { imagemCandidato: Gus, nomeCandidato: 'Gustavo Renato', matchPorcentagem: '70', candidato: Gustavo },
    { imagemCandidato: Danilo, nomeCandidato: 'Danilo Santos', matchPorcentagem: '80', candidato: DaniloModal },
  ]

  const dividirCandidatos = mostrarTodos ? candidatos : candidatos.slice(0, 3);

  //Informações do Modal
  const [candidatoAtivo, setCandidatoAtivo] = useState(null)

  const openModal = (candidato) => {
    setCandidatoAtivo(candidato);
  }

  const closeModal = () => {
    setCandidatoAtivo(null)
  }

  return (
    <section className={Style.section}>

      <div className={Style.candidatosContainer}>
        <div className={Style.Titulo}>
          <h2>Candidatos</h2>
        </div>

        {dividirCandidatos.map((candidato, index) => (
          <CandidatosProps
            key={index}
            {...candidato}
            onSaibaMais={openModal}
          />
        ))}

        {candidatoAtivo && (
          <ModalCandidatos
            {...candidatoAtivo[0]}
            onClose={closeModal}
          />
        )}
       
      </div>

      <button className={Style.VejaMais} onClick={vejaMais}>{displayText} Candidatos</button>

    </section>
  );
}
