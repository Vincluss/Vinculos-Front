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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      {/* {isVisible && <SideBarUser />} */}
      <div className={Style.userContainer}>
        <ButtonMenuProvider>
          <User />
        </ButtonMenuProvider>
      </div>
      <div className={Style.logoContainer}>
        <button className={Style.logo}>
          <Image src={Logo} alt="Logo" priority />
        </button>
      </div>

      <div className={Style.hamburgerContainer}>
        {windowWidth > 721 && <ApoieVinculos />}
        <ButtonMenuProvider>
          <HamburgerMenu />
        </ButtonMenuProvider>
      </div>
    </header>
  );
}
