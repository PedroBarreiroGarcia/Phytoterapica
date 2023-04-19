import style from "./Inscreva_se.module.css"

function Inscreva_se(){
    return(
    <div>
        <section className={style.area_inscreva_se}>
            <div className={style.espaco_inscreva_se}>
                <div className={style.espacoTexto}>
                    <div>
                        <h1 className={style.text_inscreva_maior}>INSCREVA-SE</h1>
                    </div>
                    <div>
                        <h1 className={style.text_inscreva_menor}>E RECEBA NOVIDADES E PROMOÇÕES </h1>
                    </div>
                </div>

                <div className={style.espaco_holder}>
                    <input type="text" maxlength="50" size="50" placeholder="Seu e-mail" tabindex="2" className={style.barra_email}/>
                </div>

                <div className={style.assinar}>
                    <div className={style.botaoAssinar}>
                        <h2 className={style.texto_assinar}>ASSINAR NEWSLETTER</h2>
                    </div>
                </div>
            </div>

        </section>
    </div>
    )
}

export default Inscreva_se