import Image from "next/image";
import OndaCima from '@/src/assets/img-efeitos/onda_cima.svg'

export default function HomeGeral() {
  return (
    <>
      <div>
        <Image 
          src={OndaCima}
          alt="Onda"
        />
      </div>

      <div>
        
      </div>
    </>
  )
}