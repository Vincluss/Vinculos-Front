import Image from "next/image";
import styles from '../css/modal_candidatos.module.css';

export const ModalCandidatos = ({ imagem, nome, email, localidade, deficiencia, genero, estadoCivil, sobre, habilidades, onClose }) => {
    const handleVoltarClick = () => {
        onClose();
    }

    const skills = []

    return (
        <div id={styles.modalCandidatos}>
            <div className={styles.quadrado_cima}>
                <h2 className={styles.titulo_candidato}>Candidatos</h2>

                <div className={styles.botaoFechar} onClick={onClose}>X</div>
            </div>

            <div className={styles.quadrado_meio}>
                {/*Grid: image*/}
                <div className={styles.imagem}>
                    <Image
                        src={imagem}
                        alt={nome}
                        priority
                        width={200}
                        height={200}
                    />
                </div>

                {/*Grid: info*/}
                <div className={styles.info}>
                    <h3 className={styles.nome_candidato}>{nome}</h3>
                    <ul className={styles.informacoes}>
                        <li>{email}@gmail.com</li>
                        <li>(11) 99999-9999</li>
                        <li>{localidade}</li>
                        <li>Deficiência: {deficiencia}</li>
                        <li>Gênero: {genero}</li>
                        <li>Estado civil: {estadoCivil}</li>
                    </ul>
                </div>
            </div>

            <div className={styles.quadrado_baixo}>
                {/*Grid: about*/}
                <div className={styles.about}>
                    <h3 className={styles.titulo_sobre}>Sobre</h3>

                    <p className={styles.texto_sobre}>{sobre}</p>
                </div>

                {/*Grid: skills*/}
                <div className={styles.skills}>
                    <h3 className={styles.titulo_conhecimento}>Conhecimentos</h3>
                    <ul className={styles.informacoesSobre}>
                        {habilidades.map((skill, index) => (
                            <li key={index} {...skill}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.alinhamento_botao}>
                <button className={styles.voltar} onClick={handleVoltarClick}>Voltar</button>
            </div>
        </div>
    )
}