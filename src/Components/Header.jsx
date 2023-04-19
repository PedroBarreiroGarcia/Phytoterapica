import style from "./Header.module.css"
import logo from "../Imagens/Logo_Phytoterapica.png"

function Header(){
    return(
    <div>
        <header>
            <div className={style.area_geral}>
                <div className={style.area_logo}>
                    <img src={logo} alt="Logo marca"/>
                </div>
                <div className={style.area_elementos}>
                    <div className={style.areaPlaceHolder}>
                        <input type="text" maxlength="50" size="50" placeholder="O que você procura?" tabindex="2" className={style.barra_pesquisa}/>
                    </div>

                    <div className={style.area_cupom}>
                        <p className={style.texto_cupom}>-5% NA PRIMEIRA COMPRA</p>
                    </div>

                    <div className={style.IconesCompras}>
                        <div className={style.icone}><i class="fa fa-user fa-2x"></i></div>
                        <div className={style.icone}><i class="fa fa-ligth fa-cart-shopping fa-2x"></i></div>
                    </div>


                </div>
            </div>
        </header>
    </div>
    )
}

export default Header
