import Style from "../css/formulario.module.css";

export default function Candidato() {
  return (
    <section className={Style.container}>
      <form className={Style.caixa_pequena1}>
        {/* ... outros campos ... */}

        <label>
          Nome Completo
          <input type="text" className={Style.inputStyle}/>
        </label>

        <label>
          Email <br />
          <input type="text" className={Style.inputStyle}/>
        </label>

        <label>
          Telefone Principal
          <input type="text" className={Style.inputStyle}/>
        </label>

        <label>
          Qual é o seu CEP?
          <input type="text" className={Style.inputStyle}/>
        </label>

        <label>
          Logradouro (Rua, avenida..)
          <input type="text" className={Style.inputStyle}/>
        </label>

        <label>
          Sua cidade
          <input type="text" className={Style.inputStyle}/>
        </label>

        <label>
          Bairro <br/>
          <input type="text" className={Style.inputStyle}/>
        </label>

        <label>
          Numero <br/>
          <input type="text" className={Style.inputStyle}/>
        </label>

        <label>
          Complemento
          <input type="text" className={Style.inputStyle}/>
        </label>

        <label>
          data de nascimento (idade minima 14 anos) <br />
          <input type="text" className={Style.inputStyle}/>
        </label>

        <label>Gênero:</label>
        <select>
          <option value="">Selecione...</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>

        <label htmlFor="estadoCivil">Escolha o Estado Civil:</label>
        <select>
          <option value="">Selecione...</option>
          <option value="solteiro">Solteiro/(a)</option>
          <option value="casado">Casado/(a)</option>
          <option value="divorciado">Divorciado/(a)</option>
          <option value="viuvo">Viúvo/(a)</option>
        </select> 

        <button className={Style.botao_salvar}> 
          Salvar
        </button>

        <button className={Style.botao_voltar}>
          Voltar
        </button>

      </form>
    </section>
  );
}
