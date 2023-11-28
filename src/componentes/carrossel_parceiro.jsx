import styles from '../css/carrossel_home.module.css';
import Image from 'next/image';

import jj from '../img/Logo_Vinculos_Redondo.png'

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
        { image: jj },
        { image: jj },
        { image: jj },
        { image: jj }
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