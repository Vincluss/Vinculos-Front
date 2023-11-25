import Image from "next/image";
import WaveImg from "@/src/assets/img-efeitos/onda_cima.svg";
import Style from "@/src/css/wave.module.css";

export default function Wave(){
    return(
            <Image
            src={WaveImg}
            alt="Imagem de uma onda de cor ..."
            className={Style.wave}
            />
    )
}