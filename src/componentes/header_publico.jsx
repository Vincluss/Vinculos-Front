"use client";
import style from "@/src/css/header_publico.module.css";
import Link from "next/link";
import Logo from "@/src/img/Logo_Vinculos_Redondo.png";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

export default function Header({ bgColor }) {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

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
      <button className={style.coracao}>
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
        className={`${style.sideBar} ${
          isOpen ? style.modalEnter : style.modalExit
        }`}
      >
        <ul>
          <li>INÍCIO</li>
          <li>SOBRE</li>
          <details>
            <summary>INCLUSÃO</summary>
            <p>encontrar talentos</p>
            <p>vagas</p>
          </details>

          <details>
            <summary>CURSOS</summary>
            <p>para candidatos</p>
          </details>

          {window.innerWidth < 721 && <ApoieVinculos />}
        </ul>
      </div>
    );
  };

  return (
    <header
      id="header"
      className={style.header}
      style={{ backgroundColor: `${bgColor}` }}
    >
      {windowWidth > 720 && <ApoieVinculos />}
      <button className={style.logo}>
        <Image src={Logo} alt="Logo" priority />
      </button>

      <button className={style.menu} onClick={toggleMenu}>
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
