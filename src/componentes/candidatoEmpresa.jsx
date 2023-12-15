import Image from "next/image";
import Inclusao from "@/src/assets/img-pcds/grupoTrabalhando.jpg";
import Inclusao1 from "@/src/assets/img-pcds/homemTrabalhando.jpg";
import Inclusao2 from "@/src/assets/img-pcds/mulherLinguagem.jpg";
import Style from "../css/inclusaoEmpresa.module.css";
import Link from "next/link";

export default function CandidatoEmpresa() {
  return (
    <>
      <div className={Style.fundo_candidato}>
        <h2 className={Style.titulo}>Candidatos</h2>
        <div className={Style.imagens}>
          <Image className={Style.inclusao} src={Inclusao} alt="Três homens trabalhando em um escritório" />
          <Image className={Style.inclusao} src={Inclusao1} alt="Homem cego trabalhando e lendo um texto" />
          <Image className={Style.inclusao} src={Inclusao2} alt="Mulher conversando com outras pessoas em línguas de sinais" />
        </div>
        <div className={Style.btnContainer}>
          <Link href="/match" className={Style.btn}>
            {" "}
            Veja mais
          </Link>
        </div>
      </div>
    </>
  );
}
