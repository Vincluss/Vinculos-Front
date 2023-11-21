import Style from "@/src/css/vagas.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <section className={Style.container__vagas}>
      <h3 className={Style.title__vagas}>Vagas disponíveis</h3>

      <Link href="/" className={Style.subtitle__link}>
        <h4 className={Style.subTitle__vagas}>
            Header
        </h4>
      </Link>
    </section>
  );
}
