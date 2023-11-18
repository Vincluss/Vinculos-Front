import Image from "next/image";
import OndaCima from '@/public/img/img-efeitos/onda_cima.svg'

export default function HomeGeral() {
  return (
    <main>
      <Image 
        src={OndaCima}
        alt="Onda"
      />
    </main>
  )
}
