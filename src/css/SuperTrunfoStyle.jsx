import styled from "styled-components";
export const SuperTrunfoStyle = styled.div`
    margin: 0;
    height: 100vh;
    background: linear-gradient(270deg, #001f3f, #007acc, #66c2ff);
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;

    .jogo-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 20px;
        gap: 20px;
    }

    .card-container {
        width: 250px;
        height: 400px;
        perspective: 1200px;
    }

    .card {
        width: 300px;
        height: 400px;
        background: linear-gradient(135deg, #001f3f, #0052a3);
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        color: #fff;
        transition: transform 1.2s ease;
        transform-style: preserve-3d;
        padding: 15px;
        font-family: "Audiowide", sans-serif;
        font-weight: 400;
        -moz-transform: scaleX(1);
        -o-transform: scaleX(1);
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }

    .card-back {
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 400px;
        background: linear-gradient(135deg, #001f3f, #0052a3);
        border-radius: 10px;
        color: #fff;
        text-align: center;
        padding: 20px;
        // transform: rotateY(-180deg);
        // transform: rotateY(180deg);
    }

    // .flipped .card {
    //     transform: rotateY(-180deg);
    // }

    // .flipped .card-back {
    //     transform: rotateY(0deg);
    // }

    .animate-out .card, .animate-out .card-back {
        animation: slideOut 0.5s forwards;
    }

    @keyframes slideOut {
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(100px);
        }
    }

    .imagem-nome-atributos {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .img-piloto {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-bottom: 8px;
    }

    .nome-piloto {
        font-size: 1.2rem;
        font-weight: bold;
        margin: 5px 0;
    }

    .estrutura-atributos {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 100%;
        padding: 10px 0;
    }

    .atributo {
        background: rgba(255, 255, 255, 0.1);
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        transition: background 0.3s;
        font-size: 0.9rem;
        display: flex;
        justify-content: space-between;
    }

    .atributo:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    .infos {
        text-align: center;
    }

    .rodada, .cartas, .contador-vitorias {
        font-size: 1rem;
        color: #fff;
        margin-bottom: 10px;
        font-family: "Audiowide", sans-serif;
    }

    .titulo-trunfo {
        font-size: 2.5rem;
        margin-bottom: 20px;
        font-family: "Faster One", system-ui;
    }

    .logo-formula-e {
        width: 320px;
        height: auto;
        margin-bottom: 50px;
        border-radius: 10px;
    }

    .imagem-carro {
        width: 200px;
        height: auto;
        margin-bottom: 10px;
    }

    /* Animações para o ganho e perda de cartas */
    .contador-ganhar {
        animation: ganharCartaAnimacao 0.5s ease;
    }

    .contador-perder {
        animation: perderCartaAnimacao 0.5s ease;
    }

    @keyframes ganharCartaAnimacao {
        0% { transform: scale(1); color: #4CAF50; }
        50% { transform: scale(1.2); color: #8BC34A; }
        100% { transform: scale(1); color: #4CAF50; }
    }

    @keyframes perderCartaAnimacao {
        0% { transform: scale(1); color: #F44336; }
        50% { transform: scale(0.8); color: #FF5722; }
        100% { transform: scale(1); color: #F44336; }
    }

    @keyframes gradientAnimation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    .cart-modal {
        font-size: 1rem;
        color: #fff;
        font-family: "Audiowide", sans-serif;
        // background-color: rgba(255, 255, 255, 0.9);
        background-color: rgba(0, 0, 0, 0.6); 
        border-radius: 10px;
        width: 300px;
        height: 300px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99; 
        display: none;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .cart-modal h2 {
        color: #4CAF50; /* Cor verde para a frase de parabéns */
    }

    .cart-modal p {
        color: #333; /* Cor padrão para o texto */
    }


    .modal-content {
        background-color: white;
        padding: 1.25rem;
        border-radius: 0.375rem;
        width: 350px;
        height: 400px;
    }

    .modal-title {
        color: black;
        text-align: center;
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .cart-items {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        flex-direction: column;
        color: black;
    }

    .button-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1.25rem;
        width: 100%;
    }

    .close-button {
        background-color: #a0aec0;
        color: white;
        padding: 0.25rem 1rem;
        border-radius: 0.25rem;
    }

    .checkout-button {
        background-color: #48bb78;
        color: white;
        padding: 0.25rem 1rem;
        border-radius: 0.25rem;
    }
`;

