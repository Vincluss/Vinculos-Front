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
  // const [windowWidth, setWindowWidth] = useState(null);

  // useEffect(() => {
  //   // Function to update the window width in the state
  //   const updateWindowWidth = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   // Initial call to set the window width
  //   updateWindowWidth();

  //   // Event listener to update the window width on resize
  //   window.addEventListener("resize", updateWindowWidth);

  //   // Cleanup function to remove the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener("resize", updateWindowWidth);
  //   };
  // }, []);

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
        <button className={`${Style.coracao} ${Style.hidden}`}>
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
          <li>INÍCIO</li>
          <li>SOBRE</li>
          <details>
            <summary>INCLUSÃO</summary>
            <p>Encontrar talentos</p>
            <p>Vagas</p>
          </details>

          <details>
            <summary>CURSOS</summary>
            <Link href="/cursos">
              <p>Para candidatos</p>
            </Link>
          </details>
        </ul>

        {/* {windowWidth < 720 && <ApoieVinculos />} */}
      </div>
    );
  };

  return (
    <header
      id="header"
      className={Style.header}
      style={{ backgroundColor: `${bgColor}` }}
    >
      {/* {windowWidth > 721 && <ApoieVinculos />} */}

      <button className={Style.logo}>
        <Link href="/">
          <Image src={Logo} alt="Logo" priority />
        </Link>
      </button>

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
