import Image from "next/image";
import Inclusao from "@/src/assets/img-pessoas/img-inclusao1.png";
import Inclusao1 from "@/src/assets/img-pessoas/img-inclusao2.png";
import Inclusao2 from "@/src/assets/img-pessoas/img-inclusao3.png";
import Style from '@/src/css/inclusao_empresa.module.css'

export default function ResultadoEmpresa(){
    return(
        <>
            <div className={Style.fundo_candidato}>
                <h2 className={Style.titulo}>Candidatos</h2>
                <div className={Style.imagens}>
                    <Image className={Style.inclusao1} src={Inclusao} alt="inclusao" />
                    <Image className={Style.inclusao2} src={Inclusao1} alt="inclusao1" />
                    <Image className={Style.inclusao3} src={Inclusao2} alt="inclusao2" />
                </div>
                <button className={Style.botao5}>Ver Mais</button>
            </div>
        </>
    )

}