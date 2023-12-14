import Image from "next/image";
import Style from "../css/inclusao_home.module.css";
import Inclusao from "@/src/assets/img-pcds/homemTrabalhando1.jpg";
import Inclusao1 from "@/src/assets/img-pcds/homemCego.jpg";
import Inclusao2 from "@/src/assets/img-pcds/mulherLinguagem1.jpg";
import Link from "next/link";

export default function Candidatos() {
  return (
    <div className={Style.container}>
      <div className={Style.inclusaoBg}>
        <h3 className={Style.titulo}>Inclusão</h3>
        <div className={Style.imgContainer}>
          <Image className={Style.imgInclusao} src={Inclusao} alt="inclusao" />
          <Image
            className={Style.imgInclusao}
            src={Inclusao1}
            alt="inclusao1"
          />
          <Image
            className={Style.imgInclusao}
            src={Inclusao2}
            alt="inclusao2"
          />
        </div>
        <div className={Style.btnContainer}>
          <Link href="/usuario_vagas" className={Style.btnInclusao}>
            Ver Mais
          </Link>
        </div>
      </div>
    </div>
  );
}
