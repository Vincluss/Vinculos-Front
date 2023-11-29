import Image from "next/image";
import styles from '../css/modal_candidatos.module.css';

export const ModalCandidatos = ({ imagem, nome, email, localidade, deficiencia, genero, estadoCivil, sobre, habilidades, onClose }) => {
    const handleVoltarClick = () => {
        onClose();
    }

    const skills = []

    return (
        <div id={styles.modalCandidatos}>
            <div className={styles.botaoFechar} onClick={onClose}>X</div>

            <h2>Candidatos</h2>

            {/*Grid: image*/}
            <div className={styles.imagem}>
                <Image
                    src={imagem}
                    alt={nome}
                    priority
                    width={350}
                    height={350}
                />
            </div>

            {/*Grid: info*/}
            <div className={styles.info}>
                <h3>{nome}</h3>
                <ul>
                    <li>{email}@gmail.com</li>
                    <li>(11) 99999-9999</li>
                    <li>{localidade}</li>
                    <li>Deficiência: {deficiencia}</li>
                    <li>Gênero: {genero}</li>
                    <li>Estado civil: {estadoCivil}</li>
                </ul>
            </div>
           
            {/*Grid: about*/}
            <div className={styles.about}>
                <h3>Sobre</h3>

                <p>{sobre}</p>
            </div>

            {/*Grid: skills*/}
            <div className={styles.skills}>
                <h3>Conhecimentos</h3>

                <ul>
                    {skills.map((skill, index) => (
                        <li key={index} {...skill}>
                            {habilidades}
                        </li>
                    ))}
                </ul>
            </div>
            <button className={styles.voltar} onClick={handleVoltarClick}>Voltar</button>
        </div>
    )
}