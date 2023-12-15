import Style from "../css/cadastro_usuario.module.css";
import Image from "next/image";
import Logo from "@/src/assets/logo-semfundo/5.png";
import Link from "next/link";
import { VscArrowLeft } from "react-icons/vsc";
import VLibras from "@/src/componentes/vlibras";

export default function Caduser() {
  return (
    <section className={Style.paginaCadastro}>
      {/* Formulário de cadastro da empresa */}
      {/* PRECISA FAZER O RESPONSIVO */}

      <div className={Style.caixaFormulario}>
        <Link href="/" className={Style.btn_sair}>
          <VscArrowLeft />
          &nbsp; Sair
        </Link>

        <div className={Style.containerForms}>
          <h1 className={Style.tituloCadastro}>Cadastre-se</h1>

          {/* action serve para indicar o local que será enviado as informações do formulário */}
          <form action="/curriculo" className={Style.formulario}>
            <div className={Style.formGroup}>
              <label htmlFor="email">Email </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="DIGITE SEU EMAIL"
                className={Style.estilizacaoInputs}
                required
              />
            </div>

            <div className={Style.formGroup}>
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                className={Style.estilizacaoInputs}
                placeholder="000.000.000-00"
                title="Formato esperado: 000.000.000-00"
                pattern="\d{3}.\d{3}.\d{3}-\d{2}"
                required
              />
            </div>

            <div className={Style.formGroup}>
              <label htmlFor="senha">
                Senha
                <span id="senhaHelperText" className={Style.visuallyHidden}>
                  A senha deve conter pelo menos 8 caracteres, incluindo números
                  e letras maiúsculas.
                </span>
              </label>
              <input
                id="senha"
                type="password"
                name="password"
                className={Style.estilizacaoInputs}
                title="No mínimo 8 caracteres, com 1 caracter especial e 1 número"
                required
                aria-describedby="senhaHelperText"
              />
            </div>
            <div className={Style.formGroup}>
              <label htmlFor="confirmaSenha">
                Confirmar senha
                <span id="confirmaSenhaHelper" className={Style.visuallyHidden}>
                  A senha deve conter pelo menos 8 caracteres, incluindo números
                  e letras maiúsculas.
                </span>
              </label>
              <input
                id="confirmaSenha"
                type="password"
                name="confirmPassword"
                className={Style.estilizacaoInputs}
                title="No mínimo 8 caracteres, com 1 caracter especial e 1 número"
                required
                aria-describedby="confirmaSenhaHelperText"
              />
            </div>

            <div className={Style.centraalizarBtn}>
              <button type="submit" className={Style.btnSubmit}>
                Cadastrar-se
              </button>
            </div>
          </form>

          <Link href="/login_usuario" aria-label="Login usuário" className={Style.loginLink}>
            Já tem uma conta? Faça login aqui!
          </Link>
        </div>
      </div>

      {/* Saudação da página */}
      <div className={Style.caixaSaudacao}>
        <h1 className={Style.titulo}>OLÁ!</h1>

        <h2 className={Style.subtitulo}>
          Insira seus dados e vincule-se!
        </h2>
        <div className={Style.logo}>
          <Image src={Logo} alt="Logo da Vínculos" />
        </div>
      </div>
      <VLibras forceOnload={true} />
    </section>
  );
}
