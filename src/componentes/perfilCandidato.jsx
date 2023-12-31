import React, { useState } from "react";
import Style from "../css/candidato.module.css";

const UploadIcon = () => {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="#000">
      <path d="M8.59375 43.75C7.14335 43.75 5.75235 43.1738 4.72676 42.1482C3.70117 41.1227 3.125 39.7317 3.125 38.2812V30.4688C3.125 29.8471 3.37193 29.251 3.81147 28.8115C4.25101 28.3719 4.84715 28.125 5.46875 28.125C6.09035 28.125 6.68649 28.3719 7.12603 28.8115C7.56557 29.251 7.8125 29.8471 7.8125 30.4688V38.2812C7.8125 38.7125 8.1625 39.0625 8.59375 39.0625H41.4062C41.6134 39.0625 41.8122 38.9802 41.9587 38.8337C42.1052 38.6872 42.1875 38.4885 42.1875 38.2812V30.4688C42.1875 29.8471 42.4344 29.251 42.874 28.8115C43.3135 28.3719 43.9096 28.125 44.5312 28.125C45.1529 28.125 45.749 28.3719 46.1885 28.8115C46.6281 29.251 46.875 29.8471 46.875 30.4688V38.2812C46.875 39.7317 46.2988 41.1227 45.2732 42.1482C44.2477 43.1738 42.8567 43.75 41.4062 43.75H8.59375Z" fill="black"/>
      <path d="M36.811 14.7507C37.0285 14.9682 37.2011 15.2264 37.3188 15.5106C37.4365 15.7948 37.4971 16.0994 37.4971 16.4069C37.4971 16.7145 37.4365 17.0191 37.3188 17.3033C37.2011 17.5875 37.0285 17.8457 36.811 18.0632C36.5935 18.2807 36.3353 18.4532 36.0511 18.5709C35.767 18.6887 35.4624 18.7492 35.1548 18.7492C34.8472 18.7492 34.5426 18.6887 34.2584 18.5709C33.9743 18.4532 33.716 18.2807 33.4985 18.0632L27.3423 11.9101V29.6882C27.3423 30.3098 27.0954 30.9059 26.6558 31.3455C26.2163 31.785 25.6201 32.0319 24.9985 32.0319C24.3769 32.0319 23.7808 31.785 23.3413 31.3455C22.9017 30.9059 22.6548 30.3098 22.6548 29.6882V11.9101L16.4985 18.0632C16.281 18.2807 16.0228 18.4532 15.7386 18.5709C15.4545 18.6887 15.1499 18.7492 14.8423 18.7492C14.5347 18.7492 14.2301 18.6887 13.9459 18.5709C13.6618 18.4532 13.4035 18.2807 13.186 18.0632C12.9685 17.8457 12.796 17.5875 12.6783 17.3033C12.5606 17.0191 12.5 16.7145 12.5 16.4069C12.5 16.0994 12.5606 15.7948 12.6783 15.5106C12.796 15.2264 12.9685 14.9682 13.186 14.7507L23.3423 4.59445C23.5597 4.37675 23.8179 4.20404 24.1021 4.0862C24.3862 3.96837 24.6909 3.90771 24.9985 3.90771C25.3062 3.90771 25.6108 3.96837 25.895 4.0862C26.1792 4.20404 26.4374 4.37675 26.6548 4.59445L36.811 14.7507Z" fill="black"/>
    </svg>
  )
}

export default function Perfil() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  return (
    <>
      <h2 className={Style.titulo_form}>Perfil do Candidato</h2>
      <section className={Style.container}>
        <form className={Style.caixa_grande}>
          <div>
            <label className={Style.label}>Por favor, coloque o upload do laudo da sua deficiência </label>
          </div>
          <div className={Style.topForm}>
            <label htmlFor="laudo" title="Fazer upload">
                <UploadIcon />
                <input
                    type="file"
                    id="laudo"
                    name="laudo"
                    accept="image/png, image/jpeg"
                    style={{ display: 'none' }}
                />
            </label>
            <label className={Style.label}>
              <input
                type="checkbox"
                id="termosDeUso"
              />
            </label>
            <label htmlFor="termosDeUso" className={Style.label}>
              Li e aceito os{' '}
              <a className={Style.linha} onClick={handleOpenModal}>
                termos de uso
              </a>
              .
            </label>
          </div>
        </form>
        <button className={Style.enviar} type="submit">Enviar</button>

        {openModal && (
          <div className={Style.modal}>
            <div className={Style.modalTop}>
              <h3>Termos de Uso</h3>
              <p onClick={handleCloseModal}>X</p>
            </div>
            <ol>
              <li>Objetivo: O presente termo estabelece as diretrizes e compromissos entre vínculos e seus empregados com deficiência, visando criar um ambiente de trabalho inclusivo e respeitoso.</li>
              <li>Igualdade de Oportunidades: vínculos compromete-se a promover a igualdade de oportunidades no ambiente de trabalho, assegurando que empregados com deficiência tenham acesso a todas as atividades e benefícios oferecidos aos demais colaboradores.</li>
              <li>Capacitação e Desenvolvimento: Vínculos fornecerá oportunidades de capacitação e desenvolvimento profissional específicas para empregados com deficiência, promovendo o crescimento de suas habilidades e competências.</li>
              <li>Ambiente Livre de Discriminação: Discriminação de qualquer forma, incluindo aquela relacionada à deficiência, será estritamente proibida. A empresa busca criar um ambiente de trabalho onde todos se sintam respeitados e valorizados.</li>
              <li>Comunicação Acessível: Garantiremos que todas as formas de comunicação interna e externa sejam acessíveis a todos os colaboradores, independentemente de suas limitações, proporcionando meios alternativos quando necessário.</li>
              <li>Saúde e Bem-Estar: vínculos está comprometida em oferecer suporte à saúde e ao bem-estar dos empregados com deficiência, proporcionando condições de trabalho adequadas e implementando medidas para prevenir qualquer forma de discriminação relacionada à saúde.</li>
              <li>Disposições Gerais: Este termo de uso será revisado periodicamente para garantir sua relevância e eficácia. Empregados são incentivados a reportar quaisquer preocupações relacionadas à inclusão, assegurando a contínua melhoria do ambiente de trabalho. Ao aceitar este termo, empregados e a empresa reafirmam seu compromisso com a promoção da inclusão e igualdade, contribuindo para um ambiente de trabalho diversificado e respeitoso.</li>
            </ol>
          </div>
        )}

      </section>
    </>
  );
}
