import Image from "next/image";
import Style from '@/src/css/resultado_empresa.module.css';
import Lado from "@/src/assets/img-efeitos/imagem_empresa.png";

export default function ResultadoEmpresa(){
    return(
        <>
            <div className={Style.alinhamento}>
                <div>
                    <h2 className={Style.titulo_empresa}>Resultado Para as Empresas</h2>
                    <p className={Style.subtitulo_empresa}>Que Utilizam a Vínculos</p>

                    <ul className={Style.lista_empresa}>
                        <li>Alta Diversidade</li>
                        <li>Time Mais Humanizado</li>
                        <li>Melhora da Imagem da Empresa</li>
                    </ul>
                </div>

                <div >
                    <Image
                        src={Lado}
                        alt="resultado empresa"
                        className={Style.imagem_resultado}
                    />
                </div>
            </div>

        </>
    )
}