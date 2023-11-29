import Style from "../css/doacao_vinculos.module.css";

export default function Doe() {
  return (
    <section>
        <h1 className={Style.Titulo}> Doação </h1>

      <div className={Style.Caixatexto} >

        <p>
          Doe para profissionais que precisam de equipamentos!
        </p>

        <br></br>

        <p>
          Contribua com uma de nossas instituições parceiras, e participe desse futuro inclusivo!
        </p>
      </div>

      <div className={Style.Qrcode}>




      </div>

    </section>
  );
}
