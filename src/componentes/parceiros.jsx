import Style from "../css/parceiros.module.css";

import { CarrosselParceiros } from "./carrossel_parceiro";

export default function Parceiros(){

    return (
        <div className={Style.fundo1}>
            <h1 className={Style.frase2}>Parceiros</h1>
            <CarrosselParceiros />
        </div>
    )
}