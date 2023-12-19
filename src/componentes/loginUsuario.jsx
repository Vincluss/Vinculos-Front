import Style from "../css/cadastro_usuario.module.css";
import Image from "next/image";
import Logo from "@/src/assets/logo-semfundo/5.png";
import Link from "next/link";
import { VscArrowLeft } from "react-icons/vsc";
import VLibras from "@/src/componentes/vlibras";

export default function Caduser() {
  return (
    <section className={Style.paginaCadastro}>
      <div className={Style.caixaSaudacao}>
        <h1 className={Style.titulo}>Bem vindo de volta!</h1>

        <h2 className={Style.subtitulo}>
          Para manter-se vinculado, faça o login!
        </h2>
        <div className={Style.logo}>
          <Image src={Logo} alt="Logo da Vínculos" />
        </div>
      </div>

      <div className={Style.caixaFormulario}>
        <Link href="/" className={Style.btn_sair}>
          <VscArrowLeft />
          &nbsp; Sair
        </Link>

        <div className={Style.containerForms}>
          <h1 className={Style.tituloCadastro}>Login</h1>

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

            <div className={Style.centraalizarBtn}>
              <button type="submit" className={Style.btnSubmit}>
                Entrar
              </button>
            </div>
          </form>

          <Link
            href="/login_usuario"
            aria-label="Esqueci minha senha"
            className={Style.loginLink}
          >
            Esqueceu sua conta? Clique aqui!
          </Link>
          <Link
            href="/login_usuario"
            aria-label="Cadastro usuário"
            className={Style.loginLink}
          >
            Ainda não tem sua conta? Clique aqui!
          </Link>
        </div>
      </div>

      <VLibras  />
    </section>
  );
}
