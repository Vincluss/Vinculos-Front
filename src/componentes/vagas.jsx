import Style from "@/src/css/vagas.module.css";
import Link from "next/link";

import { JobMap } from "./mapa_geolocalizacao/Map";

export default function Vagas() {

  return (
    <section id={Style.map}>
      <h3 className={Style.title__vagas}>Vagas disponíveis</h3>
      {/* <h2>mapa da geolocalização</h2> */}
      <JobMap />
    </section>
  );
}
