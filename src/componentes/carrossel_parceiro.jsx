import styles from '../css/carrossel_home.module.css';
import Image from 'next/image';
import senai from "@/src/assets/parceiros/senai.png"
import pecto from "@/src/assets/parceiros/Logo_Pecto.png"
import ajeitalar from "@/src/assets/parceiros/ajeitalar.png"

const PartnersCarousel = ({ image }) => {
    return (
        <Image
            src={image}
            alt="Parceiro"
            width={250}
            height={250}
            priority
        />
    )
}

export const CarrosselParceiros = () => {
    const partnerImages = [
        { image: senai },
        { image: senai },
        { image: ajeitalar },
        { image: pecto }
    ];

    const duplicatedPartnersImage = [...partnerImages];

    return (
        <div className={styles.logos}>
            <div className={styles.logosSlide}>
                {partnerImages.map((images, index) => (
                    <PartnersCarousel
                        key={index}
                        {...images}
                    />
                ))}
            </div>

            <div className={styles.logosSlide}>
                {duplicatedPartnersImage.map((images, index) => (
                    <PartnersCarousel
                        key={index}
                        {...images}
                    />
                ))}
            </div>
        </div>
    )
}