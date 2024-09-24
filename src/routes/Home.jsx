//import {Link} from 'react-router-dom';
import { HomeStyle } from '../css/HomeStyle.jsx';

const  Home= () =>{
    return(
        <>
        <HomeStyle>
            <section className="car-view">
                <h1>Mahindra car View 360°</h1>
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
        </HomeStyle>
        </>
    )
}

export default Home
