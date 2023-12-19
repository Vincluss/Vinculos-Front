"use client";
import Head from "next/head";
import dynamic from "next/dynamic";
import Wave from "@/src/componentes/wave";
import HeaderUser from "@/src/componentes/header/headerUser";
import Footer from "@/src/componentes/footer";


const AblyChatComponent = dynamic(() => import("@/src/componentes/chat/Chat"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <header className="relative">
        <HeaderUser bgColor="#003786" />
        <Wave position={"relative"} bgColor="#003786" />
      </header>
      <main className="main">
        <h1 className="title">Chat em tempo real</h1>
        <AblyChatComponent />
      </main>
      <Footer bgColor="#003786" />
    </>
  );
}
