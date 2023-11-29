'use client'

import React, { useState } from "react";
import Image from "next/image";
import Style from "../css/match_empresa.module.css";
import Dani from "@/public/img/img-pessoas/img-inclusao1.png"
import Gus from "@/public/img/img-pessoas/img-inclusao2.png"
import Danilo from "@/public/img/img-pessoas/img-inclusao3.png"

const CandidatosProps = ({ imagemCandidato, nomeCandidato, matchPorcentagem }) => {
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
        <button className={Style.saibaMais}>Saiba Mais</button>
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
    { imagemCandidato: Dani, nomeCandidato: 'Daniele Almeida', matchPorcentagem: '50' },
    { imagemCandidato: Gus, nomeCandidato: 'Gustavo Renato', matchPorcentagem: '70' },
    { imagemCandidato: Danilo, nomeCandidato: 'Danilo Santos', matchPorcentagem: '80' },
    
    { imagemCandidato: Dani, nomeCandidato: 'Daniele Almeida', matchPorcentagem: '50' },
    { imagemCandidato: Gus, nomeCandidato: 'Gustavo Renato', matchPorcentagem: '70' },
    { imagemCandidato: Danilo, nomeCandidato: 'Danilo Santos', matchPorcentagem: '80' },
  ]

  const dividirCandidatos = mostrarTodos ? candidatos : candidatos.slice(0, 3);


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
          />
        ))}
      </div>

      <button className={Style.VejaMais} onClick={vejaMais}>{displayText} Candidatos</button>

    </section>
  );
}
