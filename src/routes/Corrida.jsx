import { CorridasStyle } from "../css/CorridasStyle.jsx";
import  Mexico   from '../assets/bandeiras/bandeira_mexico.jpg';
import  ArabiaSaudita   from '../assets/bandeiras/bandeira_arabiaSaudita.png';
import  Brasil   from '../assets/bandeiras/bandeira_brasil.png';
import  Japao   from '../assets/bandeiras/bandeira_japao.png';
import  Italia   from '../assets/bandeiras/bandeira_italia.png';
import  Monaco   from '../assets/bandeiras/bandeira_monaco.png';
import  Alemanha from '../assets/bandeiras/bandeira_alemanha.png';
import  China   from '../assets/bandeiras/bandeira_china.png';
import  Usa   from '../assets/bandeiras/bandeira_usa.png';
import  GraBretanha   from '../assets/bandeiras/bandeira_graBretanha.jpg';
import Pista1 from '../assets/pistas/pista1.svg'
import Pista2 from '../assets/pistas/pista2.svg'
import Pista3 from '../assets/pistas/pista3.svg'
import Pista4 from '../assets/pistas/pista4.svg'
import Pista5 from '../assets/pistas/pista5.svg'
import Pista6 from '../assets/pistas/pista6.svg'
import Pista7 from '../assets/pistas/pista7.svg'
import Pista8 from '../assets/pistas/pista8.svg'
import Pista9 from '../assets/pistas/pista9.svg'
import Pista10 from '../assets/pistas/pista10.svg'



const Corrida= () =>{
    return(
        <>
            <CorridasStyle>
                <body className='calendario'>
                        <h1 className='titulo'>Calendário 2024</h1>
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
                                    <div className="info-pais">
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
                                    <div className="info-pais">
                                        <img src={ArabiaSaudita} className="img-bandeira" alt="" />
                                        <p>Diriyah</p> 
                                    </div>
                                </div>
                            
                                <div className="corrida">
                                    <div className='circuito'>
                                        <img className='img-circuito' src={Pista3} alt="" />
                                    </div>
                                    <h1>4º Corrida</h1>
                                    <h3>Mar 16, 2024</h3>
                                    <div className='border'></div>
                                    <div className="info-pais">
                                        <img src={Brasil} className="img-bandeira" alt="" />
                                        <p>São Paulo</p>
                                    </div>
                                </div>
                            
                                <div className="corrida">
                                    <div className='circuito'>
                                        <img className='img-circuito' src={Pista4} alt=""  width='202px' height='140px'/> 
                                    </div>
                                    <h1>5º Corrida</h1>
                                    <h3>Mar 30, 2024</h3>
                                    <div className='border'></div>
                                    <div className="info-pais">
                                        <img src={Japao} className="img-bandeira" alt="" />
                                        <p>Tokyo</p>
                                    </div>
                                </div>
                            
                                <div className="corrida">
                                    <div className='circuito'>
                                        <img className='img-circuito' src={Pista5} alt="" />
                                    </div>
                                    <h1>6º Corrida</h1>
                                    <h3>Apr 13, 2024</h3>
                                    <div className='border'></div>
                                    <div className="info-pais">
                                        <img src={Italia} className="img-bandeira" alt="" />
                                        <p>Misano</p>
                                    </div>
                                </div>
                            
                                <div className="corrida">
                                    <div className='circuito'>
                                        <img className='img-circuito' src={Pista5} alt="" />
                                    </div>
                                    <h1>7º Corrida</h1>
                                    <h3>Apr 14, 2024</h3>
                                    <div className='border'></div>
                                    <div className="info-pais">
                                        <img src={Italia} className="img-bandeira" alt="" />
                                        <p>Misano</p>
                                    </div>
                                </div>
                            
                                <div className="corrida">
                                    <div className='circuito'>
                                        <img className='img-circuito' src={Pista6} alt="" />
                                    </div>
                                    <h1>8º Corrida</h1>
                                    <h3>Apr 27, 2024</h3>
                                    <div className='border'></div>
                                    <div className="info-pais">
                                        <img src= {Monaco} className="img-bandeira" alt="" />
                                        <p>Monaco</p>
                                    </div>
                                </div>
                            
                                <div className="corrida">
                                    <div className='circuito'>
                                        <img className='img-circuito' src={Pista7} alt="" />
                                    </div>
                                    <h1>9º Corrida</h1>
                                    <h3>May 11, 2024</h3>
                                    <div className='border'></div>
                                    <div className="info-pais">
                                        <img src={Alemanha} className="img-bandeira" alt="" />
                                        <p>Berlim</p>
                                    </div>
                                </div>

                            
                                <div className="corrida">
                                    <div className='circuito'>
                                        <img className='img-circuito' src={Pista7} alt="" />
                                    </div>
                                    <h1>10º Corrida</h1>
                                    <h3>Mar 12, 2024</h3>
                                    <div className='border'></div>
                                    <div className="info-pais">
                                        <img src={Alemanha} className="img-bandeira" alt="" />
                                        <p>Berlim</p>
                                    </div>
                                </div>
                            
                                <div className="corrida">
                                    <div className='circuito'>
                                        <img className='img-circuito' src={Pista8} alt="" />
                                    </div>
                                    <h1>11º Corrida</h1>
                                    <h3>Mar 25, 2024</h3>
                                    <div className='border'></div>
                                    <div className="info-pais">
                                        <img src={China} className="img-bandeira" alt="" />
                                        <p>Shangai</p>
                                    </div>
                                </div>
                            
                                <div className="corrida">
                                    <div className='circuito'>
                                        <img className='img-circuito' src={Pista8} alt="" />
                                    </div>
                                    <h1>12º Corrida</h1>
                                    <h3>Mar 26, 2024</h3>
                                    <div className='border'></div>
                                    <div className="info-pais">
                                        <img src={China} className="img-bandeira" alt="" />
                                        <p>Shangai</p>
                                    </div>
                                </div>

                                <div className="corrida" >
                                    <div className='circuito'>
                                        <img className='img-circuito' src={Pista9} alt="" />
                                    </div>
                                    <h1>13º Corrida</h1>
                                    <h3>Jun 29, 2024</h3>
                                    <div className='border'></div>
                                    <div className="info-pais">
                                        <img src={Usa} className="img-bandeira" alt="" />
                                        <p>Portland</p>
                                    </div>
                                </div>

                                <div className="corrida" >
                                    <div className='circuito'>
                                        <img className='img-circuito' src={Pista9} alt="" />
                                    </div>
                                    <h1>14º Corrida</h1>
                                    <h3>Jun 30, 2024</h3>
                                    <div className='border'></div>
                                    <div className="info-pais">
                                        <img src={Usa} className="img-bandeira" alt="" />
                                        <p>Portland</p>
                                    </div>
                                </div>

                                <div className="corrida" >
                                    <div className='circuito'>
                                        <img className='img-circuito' src={Pista10} alt="" />
                                    </div>
                                    <h1>15º Corrida</h1>
                                    <h3>Jul 20, 2024</h3>
                                    <div className='border'></div>
                                    <div className="info-pais">
                                        <img src={GraBretanha} className="img-bandeira" alt="" />
                                        <p>London</p>
                                    </div>
                                </div>

                                <div className="corrida" >
                                    <div className='circuito'>
                                        <img className='img-circuito' src={Pista10} alt="" />
                                    </div>
                                    <h1>16º Corrida</h1>
                                    <h3>Jul 20, 2024</h3>
                                    <div className='border'></div>
                                    <div className="info-pais">
                                        <img src={GraBretanha} className="img-bandeira" alt="" />
                                        <p>London</p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                </body>
            </CorridasStyle>
        </>
    )
}

export default Corrida