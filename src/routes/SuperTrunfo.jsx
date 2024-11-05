import { useState, useEffect } from 'react';
import { SuperTrunfoStyle } from "../css/SuperTrunfoStyle.jsx";
import dados from '../dadosSuperTrunfo.json';
import logo from "../assets/card/logo.png";
import carro from "../assets/card/carro1.png";
import somCarta from '../assets/audios/som-card.ogg';


const SuperTrunfo = () => {
    const [jogador1, setJogador1] = useState([]);
    const [jogador2, setJogador2] = useState([]);
    const [currentRound, setCurrentRound] = useState(1);
    const [vitorias, setVitorias] = useState({ jogador1: 0, jogador2: 0 });
    const [loading, setLoading] = useState(true);
    const [animating, setAnimating] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const [ganhadorRodada, setGanhadorRodada] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);
    // const [contagemCartas, setContagemCartas] = useState({ jogador1: 12, jogador2: 12 });


    // Função para tocar o som
    const playSound = () => {
        const audio = new Audio(somCarta);
        audio.play();
    };
    useEffect(() => {
        const cartasArray = Object.values(dados);
        if (cartasArray && cartasArray.length > 0) {
            let cartas = [...cartasArray].sort(() => Math.random() - 0.5);
            const meio = Math.floor(cartas.length / 2);
            setJogador1(cartas.slice(0, meio));
            setJogador2(cartas.slice(meio));
            setLoading(false);
        } else {
            console.error("Erro: dadosSuperTrunfo.json está vazio ou não pôde ser carregado.");
            setLoading(false);
        }
    }, []);


    const handleAtributoEscolhido = (atributo) => {
        if (animating) return;

        setFlipped(true);
        setTimeout(() => {
            const cartaJogador1 = jogador1[0];
            const cartaJogador2 = jogador2[0];

            if (!cartaJogador1 || !cartaJogador2) return;

            const valor1 = cartaJogador1.atributos[atributo];
            const valor2 = cartaJogador2.atributos[atributo];

            let novoJogador1 = [...jogador1];
            let novoJogador2 = [...jogador2];

            if (valor1 > valor2) {
                novoJogador1.push(novoJogador1.shift(), cartaJogador2);
                novoJogador2.shift();
                setVitorias(prev => ({ ...prev, jogador1: prev.jogador1 + 1 }));
                setGanhadorRodada("jogador1");
            } else if (valor1 < valor2) {
                novoJogador2.push(novoJogador2.shift(), cartaJogador1);
                novoJogador1.shift();
                setVitorias(prev => ({ ...prev, jogador2: prev.jogador2 + 1 }));
                setGanhadorRodada("jogador2");
            } else {
                novoJogador1.push(novoJogador1.shift());
                novoJogador2.push(novoJogador2.shift());
                setGanhadorRodada(null); // Empate
            }

            setAnimating(true);
            playSound();
            setTimeout(() => {
                setJogador1(novoJogador1);
                setJogador2(novoJogador2);
                setCurrentRound(currentRound + 1);
                setAnimating(false);
                setFlipped(false);

                // Verifica se algum jogador ficou sem cartas

                if (novoJogador1.length === 0 || novoJogador2.length === 0) {

                    setMostrarModal(true); // Exibe o modal ao fim do jogo

                }
            }, 1000);
        }, 3000);
    };
    // const handleAtributoEscolhido = (atributo) => {

    //     if (animating) return;


    //     setFlipped(true);

    //     setTimeout(() => {

    //         const cartaJogador1 = jogador1[0];

    //         const cartaJogador2 = jogador2[0];


    //         if (!cartaJogador1 || !cartaJogador2) return;


    //         const valor1 = cartaJogador1.atributos[atributo];

    //         const valor2 = cartaJogador2.atributos[atributo];


    //         let novoJogador1 = [...jogador1];

    //         let novoJogador2 = [...jogador2];


    //         if (valor1 > valor2) {

    //             novoJogador1.push(novoJogador1.shift(), cartaJogador2);

    //             novoJogador2.shift();

    //             setVitorias(prev => ({ ...prev, jogador1: prev.jogador1 + 1 }));

    //             setGanhadorRodada("jogador1");

    //         } else if (valor1 < valor2) {

    //             novoJogador2.push(novoJogador2.shift(), cartaJogador1);

    //             novoJogador1.shift();

    //             setVitorias(prev => ({ ...prev, jogador2: prev.jogador2 + 1 }));

    //             setGanhadorRodada("jogador2");

    //         } else {

    //             novoJogador1.push(novoJogador1.shift());

    //             novoJogador2.push(novoJogador2.shift());

    //             setGanhadorRodada(null); // Empate

    //         }


    //         setAnimating(true);

    //         playSound();

    //         setTimeout(() => {

    //             setJogador1(novoJogador1);

    //             setJogador2(novoJogador2);

    //             setContagemCartas({ jogador1: novoJogador1.length, jogador2: novoJogador2.length }); // Atualiza a contagem de cartas

    //             setCurrentRound(currentRound + 1);

    //             setAnimating(false);

    //             setFlipped(false);


    //             // Verifica se algum jogador ficou sem cartas

    //             if (novoJogador1.length === 0 || novoJogador2.length === 0) {

    //                 setMostrarModal(true); // Exibe o modal ao fim do jogo

    //             }

    //         }, 1000);

    //     }, 3000);

    // };

    if (loading) {
        return <p>Carregando dados...</p>;
    }

    const vencedor = ganhadorRodada === "jogador1" ? jogador1[0].nome : ganhadorRodada === "jogador2" ? jogador2[0].nome : "Empate";

    return (
        <SuperTrunfoStyle>
            <div className="jogo-container">
                <div className={`card-container ${animating ? 'animate-out' : ''}`}>
                    {jogador1.length > 0 && (
                        <div className="card">
                            <div className="imagem-nome-atributos">
                                <img src={jogador1[0].avatar} alt={jogador1[0].nome} className="img-piloto" />
                                <p className="nome-piloto">{jogador1[0].nome}</p>
                                <div className="estrutura-atributos">
                                    {jogador1[0].atributos && Object.keys(jogador1[0].atributos).map((atributo, index) => (
                                        <div key={index} className="atributo" onClick={() => handleAtributoEscolhido(atributo)}>
                                            <p className="texto-atributo">{atributo}: {jogador1[0].atributos[atributo]}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="infos">
                    <div className="rodada">
                        <p>Rodada: {currentRound}</p>
                    </div>
                    <div className="cartas">
                        <p className={ganhadorRodada === 'jogador1' ? 'contador-ganhar' : ganhadorRodada === 'jogador2' ? 'contador-perder' : ''}>
                            Cartas Jogador 1: {jogador1.length}
                        </p>
                        <p className={ganhadorRodada === 'jogador2' ? 'contador-ganhar' : ganhadorRodada === 'jogador1' ? 'contador-perder' : ''}>
                            Cartas Jogador 2: {jogador2.length}
                        </p>
                    </div>
                    {/* <div className="cartas">
                        <p className={`contador ${ganhadorRodada === 'jogador1' ? 'contador-ganhar' : ganhadorRodada === 'jogador2' ? 'contador-perder' : ''}`}>
                            Cartas Jogador 1: {contagemCartas.jogador1}
                        </p>
                        <p className={`contador ${ganhadorRodada === 'jogador2' ? 'contador-ganhar' : ganhadorRodada === 'jogador1' ? 'contador-perder' : ''}`}>
                            Cartas Jogador 2: {contagemCartas.jogador2}
                        </p>
                    </div>  */}
                    <div className="contador-vitorias">
                        <p>{vitorias.jogador1} x {vitorias.jogador2}</p>
                    </div>
                </div>
                <div className="cart-modal" style={{ display: mostrarModal ? 'flex' : 'none' }}>
                    <div className="modal-content">
                        <h2 className="modal-title">Fim do Jogo!</h2>
                        <div className="cart-items">
                            <p>Resultado Final:</p>
                            <p>Jogador 1: {vitorias.jogador1} vitórias</p>
                            <p>Jogador 2: {vitorias.jogador2} vitórias</p>

                            <h2>Parabéns, {vencedor}!</h2>
                            <p>Você ganhou esta rodada!</p>
                        </div>
                        <div className="button-container">
                            <button className="close-button" onClick={() => setMostrarModal(false)}>Fechar</button>
                            {/* <button className="checkout-button" onClick={reiniciarJogo}>Reiniciar Jogo</button> */}
                        </div>
                    </div>
                </div>

                <div className={`card-container ${animating ? 'animate-out' : ''} ${flipped ? 'flipped' : ''}`}>
                    {jogador2.length > 0 && (
                        <div className="card">
                            {flipped ? (
                                <>
                                    <div className="imagem-nome-atributos">
                                        <img src={jogador2[0].avatar} alt={jogador2[0].nome} className="img-piloto" />
                                        <p className="nome-piloto">{jogador2[0].nome}</p>
                                        <div className="estrutura-atributos">
                                            {jogador2[0].atributos && Object.keys(jogador2[0].atributos).map((atributo, index) => (
                                                <div key={index} className="atributo">
                                                    <p className="texto-atributo">{atributo}: {jogador2[0].atributos[atributo]}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="card-back">
                                    <img src={logo} alt="Formula E Logo" className="logo-formula-e"/>
                                    <p className="titulo-trunfo">Super Trunfo</p>
                                    <img src={carro} alt="Car Image" className="imagem-carro" />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </SuperTrunfoStyle>
    );
};

export default SuperTrunfo;
