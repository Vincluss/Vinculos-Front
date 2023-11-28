import Style from "@/src/css/cadastrar_vagas.module.css";

export default function CadastroVagas() {
    return(
        <div className={Style.containerForms}>
                <form className={Style.forms}>
                        <label htmlFor="vaga" className={Style.tituloCadastro}>Cadastrar Vaga</label>

                        <input type="text" id="vaga" name="vaga" placeholder="Nome Da Vaga" className={Style.estilizacaoInput}/>

                        <label htmlFor="" className={Style.subTitulo}>Área De Atuação</label>
                        <div className={Style.posicionarCheckBox}>
                            <input list="areas_atuacao" placeholder="Selecione Uma Tag" className={Style.estilizacaoTags}/>
                            <datalist id="areas_atuacao">
                                <option value="Administração"></option>
                                <option value="Desenvolvedor Junior"></option>
                                <option value="Financeiro"></option>
                            </datalist>
                            <input list="areas_atuacao" placeholder="Selecione Uma Tag" className={Style.estilizacaoTags}/>
                            <datalist id="areas_atuacao">
                                <option value="Administração"></option>
                                <option value="Desenvolvedor Junior"></option>
                                <option value="Financeiro"></option>
                            </datalist>
                            <input list="areas_atuacao" placeholder="Selecione Uma Tag" className={Style.estilizacaoTags}/>
                            <datalist id="areas_atuacao">
                                <option value="Administração"></option>
                                <option value="Desenvolvedor Junior"></option>
                                <option value="Financeiro"></option>
                            </datalist>
                        </div>                    
                        
                        <label htmlFor="" className={Style.subTitulo}>Modelo De Trabalho</label>
                    <div className={Style.posicionarCheckBox}>
                    
                        <label htmlFor="presencial" className={Style.estilizacaoCheckBox}>Presencial
                            <input type="checkbox" name="presencial" id="presencial" value="presencial" />
                        </label>
                            
                        <label htmlFor="presencial" className={Style.estilizacaoCheckBox}>Híbrido
                            <input type="checkbox" name="presencial" id="presencial" value="presencial"/>
                        </label>
                            
                        <label htmlFor="presencial" className={Style.estilizacaoCheckBox}>Remoto
                            <input type="checkbox" name="presencial" id="presencial" value="presencial"/>
                        </label>
                    </div>
                        
                        
                    <input list="estado" placeholder="Insira aqui sua Região" className={Style.estilizacaoInput}></input>


                    <textarea name="" id="" cols="30" rows="10" placeholder="Insira Aqui A Descrição" className={Style.estilizacaoInput}></textarea>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Insira Aqui Seus Requisitos " className={Style.estilizacaoInput}></textarea>

                    <input type="number" name="" id="" placeholder="Valor Do Salário" min="0" className={Style.estilizacaoSalario}/>


                </form>

                <button type="submit" className={Style.btn_cadastrar}>CADASTRAR</button>
            </div>    
    );
}