"use client";
import Style from "../../css/headerUser.module.css";
import Link from "next/link";
import Logo from "@/src/img/Logo_Vinculos_Redondo.png";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { ButtonMenuProvider } from "./useButtonMenu";
import User from "./user";
import HamburgerMenu from "./hamburgerMenu";

export default function HeaderUser({ bgColor }) {
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

  return (
    <header
      id="header"
      className={Style.header}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div className={Style.userContainer}>
        <ButtonMenuProvider>
          <User />
        </ButtonMenuProvider>
      </div>
      <div className={Style.logoContainer}>
        <Link href={'/'} className={Style.logo}>
          <Image src={Logo} alt="Logo" priority />
        </Link>
      </div>

      <div className={Style.hamburgerContainer}>
        {windowWidth > 768 && <ApoieVinculos />}
        <ButtonMenuProvider>
          <HamburgerMenu />
        </ButtonMenuProvider>
      </div>
    </header>
  );
}
