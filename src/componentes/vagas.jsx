'use client'

import Style from "../css/vagas.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";

const JobMap = dynamic(() => import("./mapa_geolocalizacao/Map"), {
  ssr: false,
});

export default function Vagas() {
  return (
    <section id={Style.map}>
      <h3 className={Style.title__vagas}>Vagas disponíveis</h3>
      <JobMap />
    </section>
  );
}
