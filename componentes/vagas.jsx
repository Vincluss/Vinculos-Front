import Style from "@/componentes/css/vagas.module.css";
import "@/app/globals.css";
import Link from "next/link";

export default function Vagas() {
  return (
    <section className={Style.container__vagas}>
      <h3 className={Style.title__vagas}>Vagas disponíveis</h3>

      <Link href="/homeCandidato" className={Style.subtitle__link}>
        <h4 className={Style.subTitle__vagas}>
            MAPA DO GOOGLE
        </h4>
      </Link>
    </section>
  );
}
