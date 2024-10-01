import {Link} from 'react-router-dom';
import { HomeStyle } from '../css/HomeStyle.jsx';
import  Mexico   from '../assets/bandeiras/bandeira_mexico.jpg';
import  ArabiaSaudita   from '../assets/bandeiras/bandeira_arabiaSaudita.png';
import Img1 from '../assets/slide_show/img1.webp'
import Img2 from '../assets/slide_show/img2.webp'
import Img3 from '../assets/slide_show/img3.webp'
import Noticia1 from '../assets/noticias/noticia1.webp'
import Noticia2 from '../assets/noticias/noticia2.webp'
import Pista1 from '../assets/pistas/pista1.svg'
import Pista2 from '../assets/pistas/pista2.svg'



const  Home= () =>{
    return(
        <>
        <HomeStyle>
            <body>
                  <section className="slider">
                    <div className="slider-content">

                        <input type="radio" name="btn-radio" id="radio1"/>
                        <input type="radio" name="btn-radio" id="radio2"/>
                        <input type="radio" name="btn-radio" id="radio3"/>

                        <div className="slide-box primeiro">
                            <a href="https://www.mahindraracing.com/news/mahindra-racing-chasing-improved-fortune-on-the-streets-of-monaco"><img className="img-desktop" src={Img1} alt=""/></a>
                            <img className="img-mobile" src="" alt=""/>
                        </div>

                        <div className="slide-box">
                            <a href="https://www.mahindraracing.com/news/mahindra-racing-ready-for-new-look-berlin-e-prix"><img className="img-desktop" src={Img2} alt=""/></a>
                            <img className="img-mobile" src="" alt=""/>
                        </div>

                        <div className="slide-box">
                            <a href="https://www.mahindraracing.com/news/mahindra-racing-aims-to-consolidate-progress-in-shanghai"><img className="img-desktop" src={Img3} alt=""/></a>
                            <img className="img-mobile" src="" alt=""/>
                        </div>
                        
                        <div className="nav-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                        </div>
                        
                        <div className="nav-manual">
                            <label htmlFor="radio1" className="manual-btn"></label>
                            <label htmlFor="radio2" className="manual-btn"></label>
                            <label htmlFor="radio3" className="manual-btn"></label>
                        </div>
                    </div>
                </section>

                <section className='calendario'>
                    <div className='estrutura-titulo'>
                        <h1 className='titulo'>Calendário 2024</h1>
                    </div>
                    <div className="circuitos">
                        <div className="pistas">
                            <div className="corrida">
                                        <div className='circuito'>
                                            <img className='img-circuito' src={Pista1} alt="" />
                                        </div>
                                        <h1>1º Corrida</h1>
                                        <h3>Jan 13, 2024</h3>
                                        <div className='border'></div>
                                        <div className="info-pais">
                                            <img src={Mexico} className="img-bandeira" alt="" />
                                            <p>Cidade do México</p>
                                        </div>
                            </div>
                            <div className="corrida">
                                        <div className='circuito'>
                                            <img className='img-circuito' src={Pista2} alt="" />
                                        </div>
                                        <h1>2º Corrida</h1>
                                        <h3>Jan 26, 2024</h3>
                                        <div className='border'></div>
                                        <div className='info-pais'>
                                            <img src={ArabiaSaudita} className="img-bandeira" alt="" />
                                            <p>Diriyah</p>
                                        </div>
                            </div>
                            <div className="corrida">
                                        <div className='circuito'>
                                            <img className='img-circuito' src={Pista2} alt="" />
                                        </div>
                                        <h1>3º Corrida</h1>
                                        <h3>Jan 27, 2024</h3>
                                        <div className='border'></div>
                                        <div className='info-pais'>
                                            <img src={ArabiaSaudita} className="img-bandeira" alt="" />
                                            <p>Diriyah</p>
                                        </div>
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <Link className='texto-button' to="/corrida">Ver Calendário</Link>
                    </div>
                </section>
                <section className="car-view">
                    <h1 className='titulo'>Mahindra car View 360°</h1>
                    <p>Experimente uma experiência única e imersiva no mundo da Fórmula E! 🌍⚡️
                        Você já imaginou estar no cockpit de um carro de corrida elétrico, sentindo a velocidade e a adrenalina em cada curva? Agora você pode! 🚀
                        Veja abaixo e explore uma visão 360° de um carro de Fórmula E. Veja todos os detalhes, sinta a emoção da pista e descubra o futuro das corridas de automóveis. Não perca essa oportunidade de estar mais perto da ação!
                        Sinta a velocidade. Viva a emoção. Seja parte da revolução elétrica! ⚡🏁
                        </p>
                    <div className="interface">
                        <div className="flex">
                            {/* <div className="car-view"> 
                                <img id="img-car-view">
                            </div> */}
                            <div className="view-360">
                                <iframe src="https://360.3dmodels.org/view/230924/"  id="iframe"></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section-noticias'>
                    <h1 className='titulo'>Últimas notícias</h1>
                    <h3 className='sub-titulo'>Venha saber mais do time Mahindra Race</h3>
                    <div>
                        <div className="noticias">
                            <div className="noticia">
                                <div className="infos">
                                    <img className='noticia-img' src={Noticia1} alt="" />
                                    <p className='noticia-texto'>Mahindra Racing ganha prêmio de melhor conteúdo digital</p>
                                </div>
                                <div className="button noticias">
                                    <button className='texto-button'>Ver mais</button>
                                </div>
                            </div>
                            
                            <div className="noticia">
                                <div className='infos'>
                                    <img src={Noticia2} alt="" className="noticia-img" />
                                    <p className="noticia-texto">Mahindra race termina a temporada em alta </p>
                                </div>
                                <div className='button noticias'>
                                    <button className="texto-button">Ver mais</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </HomeStyle>
        </>
    )
}

export default Home
