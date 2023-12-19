"use client";
import Style from "../css/header_publico.module.css";
import Logo from "@/src/img/Logo_Vinculos_Redondo.png";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import dynamic from "next/dynamic";
import Link from "next/link";

export default function Header({ bgColor }) {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log('Window Width:', windowWidth);
  console.log(isOpen);

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
      <Link href="/doacao">
        <button className={`${Style.coracao}`}>
          <CiHeart
            size={32}
            className="font-bold"
            aria-label="Imagem de coração"
          />
          <p>Apoie Vínculos</p>
        </button>
      </Link>
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
          <Link href="/">
            <li>INÍCIO</li>
          </Link>
          <Link href="/sobre">
            <li>SOBRE</li>
          </Link>
          <details>
            <summary>INCLUSÃO</summary>
            <p>Encontrar talentos</p>
            <Link href="/usuario_vagas">
              <p>Vagas</p>
            </Link>
          </details>

          <details>
            <summary>CURSOS</summary>
            <Link href="/Cursos">
              <p>Para candidatos</p>
            </Link>
          </details>
        </ul>

        {windowWidth < 400 && <ApoieVinculos />}
      </div>
    );
  };

  return (
    <header
      id="header"
      className={Style.header}
      style={{ backgroundColor: `${bgColor}` }}
    >
      {windowWidth > 721 && <ApoieVinculos />}

      <div className={Style.logo}>
        <Link href="/">
          <Image src={Logo} alt="Logo" priority />
        </Link>
      </div>

      <button className={Style.menu} onClick={toggleMenu}>
        <Hamburger
          color="#AFC2FF"
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
