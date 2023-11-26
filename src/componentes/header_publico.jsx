"use client";
import style from "@/src/css/header_publico.module.css";
import Link from "next/link";
import Logo from "@/src/img/Logo_Vinculos_Redondo.png";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

export default function Header({ bgColor }) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
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
    )
  }

  const SideBar = () => {
    return (
      <div className={style.sideBar} >

      </div>
    )
  }

  return (
    <header id='header' className={style.header} style={{ backgroundColor: `${bgColor}` }}>
      <ApoieVinculos />
      <button className={style.logo}>
        <Image
          src={Logo}
          alt="Logo"
          priority
        />
      </button>

      <button className={style.menu} onClick={toggleMenu}>
        <Hamburger
          color="#fafafa"
          size={48}
          label="Abrir o menu"
          toggled={isOpen}
          toggle={setOpen}
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
        />
      </button>

    
      <SideBar />
    
    </header>
  );
}
