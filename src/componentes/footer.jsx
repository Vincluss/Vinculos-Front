import Style from "@/src/css/vagas.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <section className={Style.container__vagas}>
      <h3 className={Style.title__vagas}>Vagas disponíveis</h3>

      <Link id="footer" href="/home_empresa" className={Style.subtitle__link}>
        <h4 className={Style.subTitle__vagas}>
            Footer
        </h4>
      </Link>
    </section>
  );
}
