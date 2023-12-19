"use client"
import { useState } from "react";
import Style from "../../css/cadastroEmpresa.module.css";
import logo from "@/src/assets/logo-semfundo/5.png";
import Image from "next/image";
import Link from "next/link";
import { VscArrowLeft } from "react-icons/vsc";
import VLibras from "@/src/componentes/vlibras";
import { useRouter } from 'next/navigation'
import { cadastrarEmpresaReq } from "@/src/api/request";

export default function CadastroEmpresa() {

  const dadosIniciaisFormulario = {
    email_colaborador: "",
    nome_colaborador: "",
    empresa: "",
    cnpj: "",
    senha: "",
  }

  const [formData, setFormData] = useState(dadosIniciaisFormulario);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  async function hadleSubmit(event){
    event.preventDefault();

    try{
      const empresaCadastrado = await cadastrarEmpresaReq(formData);
      setFormData(dadosIniciaisFormulario)
      alert("Empresa cadastrado com sucesso")
      router.push('/home_empresa')
    }catch(err){
      console.log(err)
    }

  } 

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
          <h1 className={Style.tituloCadastro}>Cadastre sua empresa</h1>

          {/* action serve para indicar o local que será enviado as informações do formulário */}
          <form action="/curriculo" className={Style.formulario} onSubmit={hadleSubmit}>
            <div className={Style.formGroup}>
              <label htmlFor="nome">NOME DO COLABORADOR: </label>
              <input
                id="nome_colaborador"
                type="text"
                name="nome_colaborador"
                placeholder="DIGITE O SEU NOME"
                className={Style.estilizacaoInputs}
                onChange={handleChange}
                required
              />
            </div>

            <div className={Style.formGroup}>
              <label htmlFor="email">EMAIL DO COLABORADOR: </label>
              <input
                id="email_colaborador"
                type="email"
                name="email_colaborador"
                placeholder="DIGITE SEU EMAIL"
                className={Style.estilizacaoInputs}
                onChange={handleChange}
                required
              />
            </div>

            <div className={Style.formGroup}>
              <label htmlFor="empresa">EMPRESA</label>
              <input
                id="empresa"
                type="text"
                name="empresa"
                title="Nome da sua empresa"
                placeholder="DIGITE O NOME DA SUA EMPRESA"
                className={Style.estilizacaoInputs}
                onChange={handleChange}
                required
              />
            </div>
            <div className={Style.formGroup}>
              <label htmlFor="cnpj">CNPJ</label>
              <input
                id="cnpj"
                type="text"
                name="cnpj"
                className={Style.estilizacaoInputs}
                placeholder="00.000.000/0000-00"
                title="Formato esperado: 00.000.000/0000-00"
                pattern="\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}"
                onChange={handleChange}
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
                name="senha"
                className={Style.estilizacaoInputs}
                title="No mínimo 8 caracteres, com 1 caracter especial e 1 número"
                onChange={handleChange}
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
                id="senhaT"
                type="password"
                name="senhaT"
                className={Style.estilizacaoInputs}
                title="No mínimo 8 caracteres, com 1 caracter especial e 1 número"
                required
                aria-describedby="confirmaSenhaHelperText"
              />
            </div>

            <div className={Style.centraalizarBtn}>
              <button type="submit" className={Style.btnSubmit}>
                INSCREVER-SE
              </button>
            </div>
          </form>

          <Link
            href="/login_empresa"
            aria-label="Login empresa"
            className={Style.loginLink}
          >
            Já tem uma conta? Faça login aqui!
          </Link>
        </div>
      </div>

      {/* Saudação da página */}
      <div className={Style.caixaSaudacao}>
        <h1 className={Style.titulo}>OLÁ!</h1>

        <h2 className={Style.subtitulo}>Insira seus dados e vincule-se!</h2>
        <div className={Style.logo}>
          <Image src={logo} alt="Logo da Vínculos" />
        </div>
      </div>
      <VLibras forceOnload={true} />
    </section>
  );
}
