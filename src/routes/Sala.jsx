import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SalaStyle } from "../css/SalaStyle.jsx";

const Sala = () => {
    const [jogadores, setJogadores] = useState([]); // Estado para armazenar os jogadores
    const navigate = useNavigate();
    // Carregar os dados do backend
    useEffect(() => {
        axios.get('http://localhost:3000/registros') // URL do backend
            .then(response => {
                const { jogador1, jogador2 } = response.data; // Desestruturação dos jogadores
                const jogadoresArray = [];
                
                // Adiciona os jogadores existentes à lista
                if (jogador1) jogadoresArray.push(jogador1);
                if (jogador2) jogadoresArray.push(jogador2);

                setJogadores(jogadoresArray); // Atualiza o estado com os jogadores
            })
            .catch(error => {
                console.error('Erro ao carregar os dados:', error);
            });
    }, []);

    const mudarPagina= () => {
      navigate("/game")
    }
    return (
        <SalaStyle>
            <div className="login-form-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>Participantes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jogadores.map((jogador, index) => (
                            <tr key={index}>
                                <td>{jogador.nome}</td> {/* Exibe o nome do jogador */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button onClick={mudarPagina} className='btn-login' type="submit">Continuar</button>
        </SalaStyle>
    );
};

export default Sala;
