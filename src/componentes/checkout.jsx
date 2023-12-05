"use client"
import Style from "@/src/css/plano_assinatura.module.css";
import Logo from "@/src/assets/logo-semfundo/5.png"
import Image from "next/image";
const PlanoAssinaturaProps = ({ assinatura, descricao, valor, onToggle }) => {
    return (
        <>
            <section className={Style.containerPlano}>
                <div className={Style.logoContainer}>
                    <Image src={Logo} className={Style.logo}/>
                </div>
                <h1 className={Style.tituloAssinatura}>{assinatura}</h1>
                <h2 className={Style.descricao}>{descricao}</h2>
                <h2 className={Style.preco}>{valor}</h2>
            </section>
            <button type="submit" className={Style.btn_assinatura} onClick={onToggle} >
                Assinar
            </button>
        </>
    )
}

const planos = [
    { assinatura: 'VÍNCULO MENSAL', descricao: 'Neste plano a empresa cria Vínculos com nosso candidatos', valor: 'R$ 120,00' },
    { assinatura: 'VÍNCULO SEMESTRAL', descricao: 'Neste plano a empresa cria Vínculos com nosso candidatos', valor: 'R$ 615,00' },
    { assinatura: 'VÍNCULO ANUAL', descricao: 'Neste plano a empresa cria Vínculos com nosso candidatos', valor: 'R$ 980,00' },
]

export default function PlanoAssinatura({onToggle}) {
    return (
        <section className={Style.paginaPlanoAssinatura}>

            <div className={Style.container_planoAssinatura}>
                <h1 className={Style.titulo}>Conheça nossos planos de assinatura</h1>

                {planos.map((plano, index) => (
                    <PlanoAssinaturaProps
                        key={index}
                        {...plano}
                        onToggle={onToggle}
                    />
                ))}
            </div>
            
        </section>
    );
}
