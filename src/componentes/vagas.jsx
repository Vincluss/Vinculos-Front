import Style from "@/src/css/vagas.module.css";
import Link from "next/link";

export default function Vagas() {
  return (
    <section className={Style.container__vagas}>
      <h3 className={Style.title__vagas}>Vagas disponíveis</h3>

      <div id="map"></div>

      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSy"></script>
    </section>
  );
}
