"use client"
import Style from "@/src/css/plano_assinatura.module.css";
import Link from "next/link";

const PlanoAssinaturaProps = ({ assinatura, descricao, valor, onToggle }) => {
    return (
        <>
            <div className={Style.containerPlano}>
                <h1 className={Style.tituloAssinatura}>{assinatura}</h1>
                <h2 className={Style.descricao}>{descricao}</h2>
                <h2 className={Style.preco}>{valor}</h2>
            </div>
            <button type="submit" className={Style.btn_assinatura} onClick={onToggle} >
                Assinar
            </button>
        </>
    )
}

const planos = [
    { assinatura: 'MENSAL', descricao: 'Descrição', valor: 'Valor' },
    { assinatura: 'TRIMENSAL', descricao: 'Descrição', valor: 'Valor' },
    { assinatura: 'ANUAL', descricao: 'Descrição', valor: 'Valor' },
]

export default function PlanoAssinatura({onToggle}) {
    return (
        <section className={Style.paginaPlanoAssinatura}>

            <div className={Style.container_planoAssinatura}>
                <h1 className={Style.titulo}>Planos De Assinatura</h1>

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
