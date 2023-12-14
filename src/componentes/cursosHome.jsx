import Image from "next/image";
import Style from "../css/cursos_home.module.css";
import Curso from "@/src/assets/img-pcds/cursoBraille.jpg";
import Curso1 from "@/src/assets/img-pcds/pessoaLendo.jpg";
import Curso2 from "@/src/assets/img-pcds/pessoasTrabalhando.webp";
import Link from "next/link";

export default function Cursos() {
  return (
    <div className={Style.container}>
      <div className={Style.cursosBg}>
        <h3 className={Style.titulo}>Cursos</h3>
        <div className={Style.imgContainer}>
          <Image className={Style.imgInclusao} src={Curso} alt="curso" />
          <Image className={Style.imgInclusao} src={Curso1} alt="curso1" />
          <Image className={Style.imgInclusao} src={Curso2} alt="curso2" />
        </div>
        <div className={Style.btnContainer}>
          <Link href="/Cursos" className={Style.btnCursos}>
            Ver Mais
          </Link>
        </div>
      </div>
    </div>
  );
}
