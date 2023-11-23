import Image from "next/image";
import Wave from "@/src/assets/img-efeitos/onda_cima.svg";
import Style from "@src/css/wave.module.css";

export default function Wave(){
    return(

        <>
            <Image
            src={Wave}
            alt="Imagem de uma onda de cor ..."
            className={Style.wave__container}
            />
        </>

    )
}