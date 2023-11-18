import Image from "next/image";
import OndaCima from '@/src/assets/img-efeitos/onda_cima.svg';
import Pessoas from '@/src/assets/img-pessoas/img-home.png';

export default function HomeGeral() {
  return (
    <>
      <div>
        <Image 
          src={OndaCima}
          alt="Onda"
        />
      </div>
        <Image
        src={Pessoas}
        alt="Pessoas"
        />
      <div>
        
      </div>
    </>
  )
}