import style from "./Nav.module.css"

function Nav(){
    return(
    <div>
        <nav>
            <a href="#" className={style.texto_nav}> ÓLEOS ESSENCIAIS</a>
            <a href="#" className={style.texto_nav}> ÓLEOS VEGETAIS</a>
            <a href="#" className={style.texto_nav}> SINERGIAS</a>
            <a href="#" className={style.texto_nav}> COSMÉTICOS NATURAIS</a>
            <a href="#" className={style.texto_nav}> HIGIENE PESSOAL</a>
            <a href="#" className={style.texto_nav}> AROMATIZADORES</a>
            <a href="#" className={style.texto_nav}> SUPLEMENTOS</a>
            <a href="#" className={style.texto_nav}> ACESSÓRIOS</a>
            <a href="#" className={style.texto_nav}> OFERTAS</a>
            <a href="#" className={style.texto_nav}> CONSULTOR(A)</a>
        </nav>
    </div>
    )
}

export default Nav