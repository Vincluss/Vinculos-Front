"use client";
import Style from "@/src/css/header.module.css";
import Link from "next/link";
import Logo from "@/src/assets/logo-fundo/6.png";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <header id="header">
      <section
        className={`w-full h-[30vh] flex items-center justify-between bg-header px-12`}
      >
        <div className="w-1/3">
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
        </div>

        <Link href={`/`} className="flex w-1/3 justify-center">
          <div>
            <Image src={Logo} alt="False" className="rounded-full w-48 h-48" />
          </div>
        </Link>

        <div className="flex justify-between w-1/3">
          <button className="bg-main-donate flex items-center rounded-xl py-2 px-4 hover:bg-btn-vagas hover:text-white transition-all">
            <CiHeart
              size={32}
              className="font-bold"
              aria-label="Imagem de coração"
            />
            <span className="font-bold">Crie Vínculos</span>
          </button>

          <button className="rounded-full bg-btn-orange p-2">
            <CiUser
              size={32}
              className="font-bold"
              aria-label="Ícone de pessoa, abrir menu"
            />
          </button>
        </div>
      </section>
    </header>
  );
}
