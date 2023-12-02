import Image from "next/image";
import OndaEmpresa from "@/src/assets/img-efeitos/onda_escura.png";
import Style from "@/src/css/wave.module.css";

export default function WaveEmpresa(){
    return(
            <Image
            src={OndaEmpresa}
            alt="Imagem de uma onda de cor ..."
            className={Style.wave}
            />
    )
}