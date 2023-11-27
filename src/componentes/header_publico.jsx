"use client";
import Style from "../css/header_publico.module.css";
import Link from "next/link";
import Logo from "@/src/img/Logo_Vinculos_Redondo.png";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import dynamic from "next/dynamic";

export default function Header({ bgColor }) {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
    setIsVisible(true);

    if (isOpen) {
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }
  };

  const ApoieVinculos = () => {
    return (
      <button className={`${Style.coracao} ${Style.hidden}`}>
        <CiHeart
          size={32}
          className="font-bold"
          aria-label="Imagem de coração"
        />
        <p>Apoie Vínculos</p>
      </button>
    );
  };

  const SideBar = () => {
    return (
      <div
        className={`${Style.sideBar} ${
          isOpen ? Style.modalEnter : Style.modalExit
        }`}
      >
        <ul>
          <li>INÍCIO</li>
          <li>SOBRE</li>
          <details>
            <summary>INCLUSÃO</summary>
            <p>Encontrar talentos</p>
            <p>Vagas</p>
          </details>

          <details>
            <summary>CURSOS</summary>
            <p>Para candidatos</p>
          </details>
        </ul>

        <ApoieVinculos />
      </div>
    );
  };

  return (
    <header
      id="header"
      className={Style.header}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <ApoieVinculos className="xl:hidden"/>

      <button className={Style.logo}>
        <Image src={Logo} alt="Logo" priority />
      </button>

      <button className={Style.menu} onClick={toggleMenu}>
        <Hamburger
          color="#E8A023"
          size={40}
          label="Abrir o menu"
          toggled={isOpen}
          toggle={setOpen}
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
        />
      </button>

      {isVisible && <SideBar />}
    </header>
  );
}
