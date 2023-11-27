import Image from "next/image";
import Style from '@/src/css/resultado_comunidade.module.css';
import Comunidade1 from "@/src/assets/img-efeitos/comunidade1.png"
import Comunidade2 from "@/src/assets/img-efeitos/comunidade2.png"
import Comunidade3 from "@/src/assets/img-efeitos/comunidade3.png"

export default function ResultadoComunidade(){
    return(
        <>
            <section>
                <h2 className={Style.titulo4}>Resultados Para a Comunidade</h2>

                <div className={Style.quadrado_grande}>
                    <div className={Style.quadrado1}>
                        <Image 
                            src={Comunidade1}
                            alt="imagem redonda comunidade"
                            className={Style.redonda1}
                        />
                        <h3 className={Style.descricao}>Inclusão</h3>
                    </div>

                    <div className={Style.quadrado2}>
                        <Image 
                            src={Comunidade2}
                            alt="imagem redonda comunidade"
                            className={Style.redonda2}
                        />
                        <h3 className={Style.descricao}>Capacitação</h3>
                    </div>

                    <div className={Style.quadrado3}>
                        <Image 
                            src={Comunidade3}
                            alt="imagem redonda comunidade"
                            className={Style.redonda3}
                        />
                        <h3 className={Style.descricao}>Mais Oportunidade</h3>
                    </div>
                </div>
            </section>
        </>
    )
}