import Style from "../css/local.module.css";

export default function Local() {
    return(
        <section className={Style.container}>
            <div className={Style.caixa1}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
            </div>
            <div className={Style.caixa3}></div>
            <p className={Style.caixa4}>São Paulo</p>  
        </section>
    )
}