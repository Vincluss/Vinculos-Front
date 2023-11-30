import Image from "next/image";
import Inclusao from "@/src/assets/img-pcds/grupoTrabalhando.jpg";
import Inclusao1 from "@/src/assets/img-pcds/homemTrabalhando.jpg";
import Inclusao2 from "@/src/assets/img-pcds/mulherLinguagem.jpg";
import Style from "@/src/css/inclusao_empresa.module.css";

export default function CandidatoEmpresa() {
  return (
    <>
      <div className={Style.fundo_candidato}>
        <h2 className={Style.titulo}>Candidatos</h2>
        <div className={Style.imagens}>
          <Image className={Style.inclusao} src={Inclusao} alt="inclusao" />
          <Image className={Style.inclusao} src={Inclusao1} alt="inclusao1" />
          <Image className={Style.inclusao} src={Inclusao2} alt="inclusao2" />
        </div>
        <div className={Style.btnContainer}>
          <button className={Style.btn}>Ver Mais</button>
        </div>
      </div>
    </>
  );
}
