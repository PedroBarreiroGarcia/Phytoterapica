import style from "./Icones_inform.module.css"
import ImgVegano from "../Imagens/texto_vegano.png"
import ImgTestes from "../Imagens/texto_testes.png"
import ImgPurezas from "../Imagens/texto_purezas.png"

function Icones_inform(){
    return(
    <div>
        <section className={style.area_icones_informacoes}>
            <div className={style.espacoIcones}>
                <div className={style.iconeInformativo}>
                    <img src={ImgVegano} alt="" />
                </div>

                <div className={style.linhaDivisoria}></div>

                <div className={style.iconeInformativo}>
                    <img src={ImgTestes} alt="" />
                </div>

                <div className={style.linhaDivisoria}></div>

                <div className={style.iconeInformativo}>
                    <img src={ImgPurezas} alt="" />
                </div>

            </div>

        </section>
    </div>
    )
}

export default Icones_inform