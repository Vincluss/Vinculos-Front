import Image from "next/image";
import Style from "../css/cursos_home.module.css";
import Curso from '@/src/assets/img-pessoas/img-curso1.png'
import Curso1 from '@/src/assets/img-pessoas/img-curso2.png'
import Curso2 from '@/src/assets/img-pessoas/img-curso3.png'

export default function Cursos(){
    return (
        <div className={Style.fundo_cursos}>
                <div className={Style.fundo4}>
                <h3 className={Style.titulo1}>Cursos</h3>
                <div className={Style.imagens1}>
                    <Image className={Style.cursos1}
                    src={Curso}
                    alt="curso"
                    />
                    <Image className={Style.cursos2}
                    src={Curso1}
                    alt="curso1"
                    />
                    <Image className={Style.cursos3}
                    src={Curso2}
                    alt="curso2"
                    />
                </div>
                <button className={Style.botao4}>Ver Mais</button>
            </div>
        </div>
    )
}