"use client";
import Head from "next/head";
import dynamic from "next/dynamic";

const AblyChatComponent = dynamic(() => import("@/src/componentes/chat/Chat"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="main">
      <h1 className="title">Chat em tempo real</h1>
      <AblyChatComponent />
    </main>
  );
}
