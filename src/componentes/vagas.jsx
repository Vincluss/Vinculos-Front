<<<<<<< HEAD
import Style from "@/src/css/vagas.module.css";
=======
import Style from "@/componentes/css/vagas.module.css";
import "@/src/app/globals.css";
>>>>>>> 39bad4ee3e5d601f490610614768036a1632f2b6
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
