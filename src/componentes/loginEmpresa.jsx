import Style from "../css/cadastroEmpresa.module.css";
import logo from "@/src/assets/logo-semfundo/5.png";
import Image from "next/image";
import Link from "next/link";
import { VscArrowLeft } from "react-icons/vsc";

export default function LoginEmpresa() {
  return (
    <section className={Style.paginaCadastro}>
      {/* Formulário de cadastro da empresa */}
      {/* PRECISA FAZER O RESPONSIVO */}
      {/* Saudação da página */}
      <div className={Style.caixaSaudacao}>
        <h1 className={Style.titulo}>Bem vindo de volta!</h1>

        <h2 className={Style.subtitulo}>
        Para manter-se vinculado, faça o login!
        </h2>
        <div className={Style.logo}>
          <Image src={logo} alt="Logo da Vínculos" />
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
              <label htmlFor="empresa">Empresa</label>
              <input
                id="empresa"
                type="text"
                name="empresa"
                title="Nome da sua empresa"
                placeholder="DIGITE O NOME DA SUA EMPRESA"
                className={Style.estilizacaoInputs}
                required
              />
            </div>

            <div className={Style.formGroup}>
              <label htmlFor="email">Email do colaborador</label>
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
                Login
              </button>
            </div>
          </form>

          <Link
            href="/login_empresa"
            aria-label="Esqueci minha senha"
            className={Style.loginLink}
          >
            Esqueceu sua senha? Clique aqui!
          </Link>

          <Link
            href="/login_empresa"
            aria-label="Cadastro empresa"
            className={Style.loginLink}
          >
            Não tem uma conta? Clique aqui!
          </Link>
        </div>
      </div>
    </section>
  );
}
