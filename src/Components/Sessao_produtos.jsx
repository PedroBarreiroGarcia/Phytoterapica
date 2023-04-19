import style from "./Sessao_produtos.module.css"

function Sessao_produtos(props){
    return(
    <div>
        <div className={style.quadrinho}>
            <div className={style.imgCard}><img src={props.foto} alt="" /></div>
            <h2 className={style.DescricaoProduto}> {props.descricaoProduto}</h2>
            <p className={style.textoValor}>{props.valor}</p>
            <p className={style.textoParcelamento}>{props.parcelamento}</p>
        </div>
        
    </div>
    )
}

export default Sessao_produtos