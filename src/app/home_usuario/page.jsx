import Image from "next/image";
import OndaCima from '@/public/img/img-efeitos/onda_cima.svg'

export default function HomeCandidato(){
    return(
        <div>
            <Image 
                src={OndaCima}
                alt="Onda"
            />
        </div>
    )
}