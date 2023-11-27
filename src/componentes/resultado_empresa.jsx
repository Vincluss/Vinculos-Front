import Style from '@/src/css/resultado_empresa.module.css'

export default function ResultadoEmpresa(){
    return(
        <>
            <div>
                <h2 className={Style.}>Resultado para as Empresas</h2>
                <p>Que Utilizam a Vínculos</p>

                <li>
                    <ul>Alta Diversidade</ul>
                    <ul>Time Mais Humanizado</ul>
                    <ul>Melhora da Imagem da Empresa</ul>
                </li>
            </div>
        </>
    )
}