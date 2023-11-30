import Style from "@/src/css/vagas.module.css";
import Link from "next/link";

import { Map } from "./mapa_geolocalizacao/Map";
import { jobsData } from "./mapa_geolocalizacao/data/jobs";

export default function Vagas() {
  const center = [-23.550520, -46.633308];
  const zoom = 10;

  return (
    <section className={Style.container__vagas}>
      <h3 className={Style.title__vagas}>Vagas disponíveis</h3>
        {/* <h2>mapa da geolocalização</h2> */}
        <Map center={center} zoom={zoom} jobs={jobsData} />
    </section>
  );
}
