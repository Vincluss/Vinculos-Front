import Style from "../css/formulario.module.css";

export default function Candidato() {
  return (
    <>
      <h2 className={Style.titulo_form}>Perfil do Candidato</h2>
      <section className={Style.container}>
        <form className={Style.caixa_pequena1}>

          <label className={Style.label}>Nome Completo
            <input type="text" placeholder="digite seu nome" className={Style.inputStyle} />
          </label>

          <label className={Style.label}>Email:
            <input type="text" placeholder="digite seu email" className={Style.inputStyle} />
          </label>

          <label className={Style.label}>Telefone Principal
            <input type="text" placeholder="(11) 9999-99999" className={Style.inputStyle} />
          </label>

          <label className={Style.label}>Qual é o seu CEP?
            <input type="text" placeholder="00000-0000" className={Style.inputStyle} />
          </label>

          <label className={Style.label}>Logradouro (Rua, avenida..)
            <input type="text" placeholder="digite sua rua" className={Style.inputStyle} />
          </label>

          <label className={Style.label}>Sua cidade
            <input type="text" placeholder="são paulo - SP" className={Style.inputStyle} />
          </label>

          <div className={Style.diferente}>
            <label className={Style.label}>Bairro
              <input type="text" placeholder="digite seu bairro" className={Style.bairro} />
            </label>

            <label className={Style.label}>Numero
              <input type="number" placeholder="ex:200" className={Style.numero} />
            </label>
          </div>
          
          <label className={Style.label}>Complemento
            <input type="text" placeholder="ex: casa 3" className={Style.inputStyle} />
          </label>

          <label className={Style.label}>data de nascimento (idade minima 14 anos)
            <input type="date" placeholder="DD/MM/AAAA" className={Style.inputStyle} />
          </label>

          <label htmlFor="" className={Style.titulo_area}>Área De Atuação</label>
          <div className={Style.tags}>
            <input list="areas_atuacao" placeholder="Selecione Uma Tag" className={Style.estilizacaoTags}/>
            <input list="areas_atuacao" placeholder="Selecione Uma Tag" className={Style.estilizacaoTags}/>
            <input list="areas_atuacao" placeholder="Selecione Uma Tag" className={Style.estilizacaoTags}/>
          </div>

          <select className={Style.select}>
            <label>Gênero:</label>
            <option value="">Selecione...</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>

          <select className={Style.select}>
            <label htmlFor="estadoCivil">Escolha o Estado Civil:</label>
            <option value="">Selecione...</option>
            <option value="solteiro">Solteiro/(a)</option>
            <option value="casado">Casado/(a)</option>
            <option value="divorciado">Divorciado/(a)</option>
            <option value="viuvo">Viúvo/(a)</option>
          </select>

          <button className={Style.botao_salvar}>Salvar</button>

          <button className={Style.botao_voltar}>Voltar</button>
        </form>
      </section>
    </>
  );
}
