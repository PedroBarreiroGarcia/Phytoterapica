import style from "./Sessao_img.module.css"
import ImagemFundo from "../Imagens/img_oleo.png"

function Sessao_img(){
    return(
    <div>
        <section className={style.area_img}>
            <div className={style.fundo_img}>
                <img src={ImagemFundo} alt="Imagem de fundo"/>
                <h1 className={style.TituloImg}>Óleos Essenciais</h1>
                <div className={style.areaTextoImg}>
                    <p className={style.TextoImg}>Óleos essenciais são compostos naturais extraídos da parte aromática das plantas, como folhas,flores, galhos, troncos, raízes e casca de frutos</p>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Sessao_img