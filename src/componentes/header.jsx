"use client";
import Style from "@/src/css/header.module.css";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import Image from "image/next";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpen(false); // Close the menu when the viewport becomes full screen
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header id="header">
      <section className={``}>
        <div tabIndex={0} className="lg:hidden">
          <Hamburger
            color="#fafafa"
            size={32}
            label="Abrir o menu"
            toggled={isOpen}
            toggle={setOpen}
            aria-haspopup="true"
            aria-controls="menu"
            aria-expanded="false"
          />
        </div>
      </section>
    </header>
  );
}
