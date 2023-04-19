import style from "./Botoes.module.css"

function Botoes(){
    return(
    <div>
        <section className={style.sessao_btn}>
            <div className={style.area_btn}>
                <div className={style.btn1}>
                    <h1 className={style.texto_btn}>FILTRAR</h1>
                    <i class="fas fa-light fa-sliders fa-2x"></i>
                </div>
                <div className={style.btn2}>
                    <h1 className={style.texto_btn}>ORDENAR POR</h1>
                    <i class="fa-solid fa-bars fa-2x"></i>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Botoes