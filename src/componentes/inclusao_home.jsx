import Image from "next/image";
import Style from "../css/inclusao_home.module.css";
import Inclusao from "@/src/assets/img-pessoas/img-inclusao1.png";
import Inclusao1 from "@/src/assets/img-pessoas/img-inclusao2.png";
import Inclusao2 from "@/src/assets/img-pessoas/img-inclusao3.png";
import Link from "next/link";

export default function Candidatos() {
  return (
    <div className={Style.fundo_inclusao}>
      <div className={Style.fundo3}>
        <h3 className={Style.titulo}>Inclusão</h3>
        <div className={Style.imagens}>
          <Image className={Style.inclusao1} src={Inclusao} alt="inclusao" />
          <Image className={Style.inclusao2} src={Inclusao1} alt="inclusao1" />
          <Image className={Style.inclusao3} src={Inclusao2} alt="inclusao2" />
        </div>
        <Link href="/">
          <div className={Style.button__container}>
            <button className={Style.botao3}>Ver Mais</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
