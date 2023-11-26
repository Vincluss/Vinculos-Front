import Style from "../css/parceiros.module.css";
import Image from "next/image";

const Partners = ({ image }) => {
    return (
        <Image
            src={image}
            alt="Parceiro"
            priority
        />
    )
}

export default function Parceiros(){
    const partnerImages = [
        { image: '' },
        { image: '' }
    ]

    return (
        <div className={Style.fundo1}>
            <h1 className={Style.frase2}>Parceiros</h1>
            <div className={Style.logos}>
                <div className={Style.logosSlide}>
                    {partnerImages.map((images, index) => {
                        <Partners
                            key={index}
                            {...images}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}