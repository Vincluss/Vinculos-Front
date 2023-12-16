"use client";

import React, { useState } from "react";
import Image from "next/image";
import Style from "../css/matchEmpresa.module.css";
import Dani from "@/public/img/img-pessoas/img-inclusao1.png";
import Gus from "@/public/img/img-pessoas/img-inclusao2.png";
import Danilo from "@/public/img/img-pessoas/img-inclusao3.png";
import { ModalCandidatos } from "./modalCandidatos";

import { Daniele, Gustavo, DaniloModal } from "./modalCandidatosInfo";

const CandidatosProps = ({
  imagemCandidato,
  nomeCandidato,
  matchPorcentagem,
  candidato,
  onSaibaMais,
}) => {
  return (
    <div className={Style.candidatosContent}>
      <div className={Style.imagemContainer}>
        <Image
          src={imagemCandidato}
          alt={nomeCandidato}
          priority
          width={200}
          height={200}
          className={Style.imagemCandidato}
        />
      </div>
      <div className={Style.candidatosInfo}>
        <h3>{nomeCandidato}</h3>
        <p>Possui um match de {matchPorcentagem}% com sua vaga de estágio</p>
        <button
          className={Style.saibaMais}
          onClick={() => onSaibaMais(candidato)}
        >
          Saiba mais
        </button>
      </div>
    </div>
  );
};

export default function Candidatos() {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [displayText, setDisplayText] = useState("Ver mais");

  const vejaMais = () => {
    setMostrarTodos(!mostrarTodos);
    setDisplayText(mostrarTodos ? "Ver mais" : "Ocultar");
  };

  const candidatos = [
    {
      imagemCandidato: Dani,
      nomeCandidato: "Daniele Almeida",
      matchPorcentagem: "50",
      candidato: Daniele,
    },
    {
      imagemCandidato: Gus,
      nomeCandidato: "Gustavo Renato",
      matchPorcentagem: "70",
      candidato: Gustavo,
    },
    {
      imagemCandidato: Danilo,
      nomeCandidato: "Danilo Santos",
      matchPorcentagem: "80",
      candidato: DaniloModal,
    },

    {
      imagemCandidato: Dani,
      nomeCandidato: "Daniele Almeida",
      matchPorcentagem: "50",
      candidato: Daniele,
    },
    {
      imagemCandidato: Gus,
      nomeCandidato: "Gustavo Renato",
      matchPorcentagem: "70",
      candidato: Gustavo,
    },
    {
      imagemCandidato: Danilo,
      nomeCandidato: "Danilo Santos",
      matchPorcentagem: "80",
      candidato: DaniloModal,
    },
  ];

  const dividirCandidatos = mostrarTodos ? candidatos : candidatos.slice(0, 3);

  //Informações do Modal
  const [candidatoAtivo, setCandidatoAtivo] = useState(null);

  const openModal = (candidato) => {
    setCandidatoAtivo(candidato);
  };

  const closeModal = () => {
    setCandidatoAtivo(null);
  };

  return (
    <section className={Style.section}>
      <div className={Style.candidatosContainer}>
        <div className={Style.titulo}>
          <h2>Candidatos</h2>
        </div>

        {dividirCandidatos.map((candidato, index) => (
          <CandidatosProps key={index} {...candidato} onSaibaMais={openModal} />
        ))}

        {candidatoAtivo && (
          <ModalCandidatos {...candidatoAtivo[0]} onClose={closeModal} />
        )}
      </div>
      <div className={Style.buttonContainer}>
        <button className={Style.vejaMais} onClick={vejaMais}>
          {displayText} Candidatos
        </button>
      </div>
    </section>
  );
}
