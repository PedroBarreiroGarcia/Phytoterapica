import style from "./Footer.module.css"
import iconeInsta from "../Imagens/icon_insta.png"
import iconeFace from "../Imagens/icon_face.png"
import iconeBlog from "../Imagens/icon_blog.png"
import iconeYouTube from "../Imagens/icon_youTube.png"
import iconeTwitter from "../Imagens/icon_twitter.png"
import imgMaster from "../Imagens/logo_master.png"
import imgVisa from "../Imagens/logo_visa.png"
import imgAmerican from "../Imagens/logo_american.png"
import imgElo from "../Imagens/logo_elo.png"
import imgHiper from "../Imagens/logo_hipercard.png"
import imgPix from "../Imagens/logo_pix.png"


function Footer(){
    return(
    <div>
        <footer>
            <section className={style.AreaGeralFooter}>

                <div className={style.areaSuporteFooter}>
                    <h1 className={style.TextoSuporteFooter}>Sobre</h1>
                    <h2 className={style.TextoSuporte}>Quem Somos (A Empresa)</h2>
                    <h2 className={style.TextoSuporte}>Nossos Contatos</h2>
                    <h2 className={style.TextoSuporte}>Trabalhe Conosco</h2>
                    <h2 className={style.TextoSuporte}>Fale Conosco (SAC)</h2>
                    <h2 className={style.TextoSuporte}>Consultora</h2>
                    <h2 className={style.TextoSuporte}>Atacado</h2>
                </div>

                <div className={style.areaSuporteFooter}>
                    <h1 className={style.TextoSuporteFooter}>Suporte</h1>
                    <h2 className={style.TextoSuporte}>Política de Entrega</h2>
                    <h2 className={style.TextoSuporte}>Política de Trocas e Devolução</h2>
                    <h2 className={style.TextoSuporte}>Ingestão de Óleos Essenciais</h2>
                    <h2 className={style.TextoSuporte}>Cromatografia</h2>
                    <h2 className={style.TextoSuporte}>Encarregado de Dados - JKD ME</h2>
                    <h2 className={style.TextoSuporte}>privacidade@phytoterapica.com.br</h2>
                </div>

                <div className={style.areaSuporteFooter}>
                    <h1 className={style.TextoSuporteFooter}>Área do Cliente</h1>
                    <h2 className={style.TextoSuporte}>Login</h2>
                    <h2 className={style.TextoSuporte}>Carrinho</h2>
                    <h2 className={style.TextoSuporte}>Minha Conta</h2>
                    <h2 className={style.TextoSuporte}>Meus Pedidos</h2>
                    <h2 className={style.TextoSuporte}>Preferências de Cookies</h2>
                </div>

                <div className={style.AreaImg}>
                    <div className={style.areaPagamentos}>
                        <div className={style.AreaTextoRedes}>
                            <h1 className={style.TextoFooter}>Formas de Pagamento</h1>
                        </div>

                        <div className={style.ImgPagamentos}>
                            <div className={style.logoPagamento}>
                                <img src={imgMaster} alt="" />
                            </div>
                            <div className={style.logoPagamento}>
                                <img src={imgVisa} alt="" />
                            </div>
                            <div className={style.logoPagamento}>
                                <img src={imgAmerican} alt="" />
                            </div>
                            <div className={style.logoPagamento}>
                                <img src={imgElo} alt="" />
                            </div>
                            <div className={style.logoPagamento}>
                                <img src={imgHiper} alt="" />
                            </div>
                            <div className={style.logoPagamento}>
                                <img src={imgPix} alt="" />
                            </div>
                        </div>

                        
                    </div>

                    <div className={style.areaRedesSociais}>
                        <div className={style.AreaTextoRedes}>
                            <h1 className={style.TextoFooter}>Nossas Redes Sociais</h1>
                        </div>
                        
                        <div className={style.ImgRedesSociais}>
                            <div className={style.iconeRedeSocial}>
                                <img src={iconeInsta} alt="" />
                            </div>
                            <div className={style.iconeRedeSocial}>
                                <img src={iconeFace} alt="" />
                            </div>
                            <div className={style.iconeRedeSocial}>
                                <img src={iconeBlog} alt="" />
                            </div>
                            <div className={style.iconeRedeSocial}>
                                <img src={iconeYouTube} alt="" />
                            </div>
                            <div className={style.iconeRedeSocial}>
                                <img src={iconeTwitter} alt="" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <div className={style.linhaDivisoriaFooter}></div>
            <div className={style.areaTextos}>
                <p className={style.TextoDireitosAutorais}>PHYTOTERAPICA© 2023 | AV NOVA CANTAREIRA, 2627 - SÃO PAULO/SP |CNPJ: 72.962.327/0001-55</p>
            </div>

        </footer>
    </div>
    )
}

export default Footer