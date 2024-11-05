import { GameStyle } from "../css/GameStyle.jsx";
import { useState, useEffect } from "react";
import axios from 'axios';
import dados from '../dados.json';

const Game = () => {
  const [time, setTime] = useState(20);
  const [isRunning, setIsRunning] = useState(false);
  const [rodadaAtual, setRodadaAtual] = useState(1);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [bloquearEscolha, setBloquearEscolha] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [respostaCorreta, setRespostaCorreta] = useState(null);
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 1) {
            stopCronometro();
            fimDaRodada();
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  useEffect(() => {
    startCronometro();
  }, [rodadaAtual]);

  useEffect(() => {
    const carregarJogadores = async () => {
      try {
        const response = await axios.get('http://localhost:3000/registros');
        const { jogador1, jogador2 } = response.data;

        const jogadoresArray = [];
        if (jogador1) jogadoresArray.push({ ...jogador1, pontuacao: jogador1.pontuacao || 0 });
        if (jogador2) jogadoresArray.push({ ...jogador2, pontuacao: jogador2.pontuacao || 0 });

        setJogadores(jogadoresArray);
      } catch (error) {
        console.error('Erro ao carregar os dados dos jogadores:', error);
      }
    };

    carregarJogadores();
  }, [rodadaAtual, mostrarModal]);

  const startCronometro = () => {
    setIsRunning(true);
  };

  const stopCronometro = () => {
    setIsRunning(false);
  };

  const resetCronometro = () => {
    setIsRunning(false);
    setTime(10);
  };

  const fimDaRodada = () => {
    setBloquearEscolha(true);
    setMostrarModal(true); // Exibe o modal logo após a rodada
    stopCronometro();
    resetCronometro();
  };

  const escolherResposta = (nome) => {
    if (!bloquearEscolha) {
      setRespostaSelecionada(nome);
      const respostaCerta = rodada.resposta === nome;
      setRespostaCorreta(respostaCerta);

      if (respostaCerta) {
        const jogadorAtual = jogadores.find((jogador) => jogador.nome === nome);
        if (jogadorAtual) {
          atualizarPontuacao(jogadorAtual, 10);
        }
      }
      fimDaRodada();
    }
  };

  const atualizarPontuacao = (jogador, pontos) => {
    // Atualiza a pontuação no estado local
    setJogadores((prevJogadores) =>
      prevJogadores.map((j) =>
        j.nome === jogador.nome ? { ...j, pontuacao: j.pontuacao + pontos } : j
      )
    );

    // Envia atualização ao backend e carrega os dados atualizados
    axios
      .post('http://localhost:3000/update-registros', {
        jogadorAtualizado: { ...jogador, pontuacao: jogador.pontuacao + pontos },
      })
      .then(async (response) => {
        console.log('Pontuação atualizada no servidor:', response.data.message);

        // Recarrega os dados do backend para garantir que o estado reflete o JSON atualizado
        const responseAtualizado = await axios.get('http://localhost:3000/registros');
        const { jogador1, jogador2 } = responseAtualizado.data;
        const jogadoresAtualizados = [];

        if (jogador1) jogadoresAtualizados.push({ ...jogador1, pontuacao: jogador1.pontuacao || 0 });
        if (jogador2) jogadoresAtualizados.push({ ...jogador2, pontuacao: jogador2.pontuacao || 0 });

        setJogadores(jogadoresAtualizados);
      })
      .catch((error) => {
        console.error('Erro ao atualizar a pontuação no servidor:', error);
      });
  };

  const proximaRodada = () => {
    if (rodadaAtual < Object.keys(dados).length) {
      setRodadaAtual(rodadaAtual + 1);
      setRespostaSelecionada(null);
      setBloquearEscolha(false);
      setMostrarModal(false);
      setRespostaCorreta(null);
    } else {
      alert('Fim do Quiz!');
    }
  };

  const rodadaChave = `rodada${rodadaAtual}`;
  const rodada = dados[rodadaChave];

  return (
    <>
      <GameStyle>
        <div className="principal">
          <div className="cronometro">
            <p className="tempo">00:{time}</p>
            {/* <button onClick={startCronometro}>Iniciar</button>
            <button onClick={stopCronometro}>Parar</button> */}
          </div>

          <div className="cart-modal" style={{ display: mostrarModal ? 'flex' : 'none' }}>
            <div className="modal-content">
              <h2 className="modal-title">Pontuação</h2>
              <div className="cart-items">
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Pontuação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jogadores.map((jogador, index) => (
                      <tr key={index}>
                        <th>{jogador.nome}</th>
                        <th>{jogador.pontuacao}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="button-container">
                <button className="close-button" onClick={() => setMostrarModal(false)}>Fechar</button>
                <button className="checkout-button" onClick={proximaRodada}>Próxima Pergunta</button>
              </div>
            </div>
          </div>

          <div>
            <h1>{rodada.pergunta}</h1>
            <div className="respostas">
              {rodada.respostas.map((piloto) => (
                <div
                  key={piloto.id}
                  onClick={() => escolherResposta(piloto.nome)}
                  className={`teste ${respostaSelecionada === piloto.nome ? 'selecionada' : ''}`}
                  id={`resposta${piloto.id}`}
                  style={{
                    pointerEvents: bloquearEscolha ? 'none' : 'auto',
                    border: respostaSelecionada === piloto.nome
                      ? respostaCorreta
                        ? '2px solid green'
                        : '2px solid red'
                      : '1px solid gray'
                  }}
                >
                  <p className="resposta">{piloto.nome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GameStyle>
    </>
  );
};

export default Game;
