// CriarSala.jsx
import { CriarSalaStyle } from "../css/CriarSalaStyle.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const CriarSala= () => {
     const [nome, setNome] = useState('');
     const navigate = useNavigate();
 
     const handleSubmit = (e) => {
        e.preventDefault();

        // Enviar o nome do jogador para o backend via POST
        axios.post('http://localhost:3000/update-registros', {
            jogador1: { nome, pontuação: 0 }, codigo: "12345" // Estrutura do jogador1
        })
        .then(response => {
            console.log("Dados atualizados no backend:", response.data);
            // Navegar para a página de sala após o envio
            navigate('/sala');
        })
        .catch(error => {
            console.error('Erro ao atualizar os dados:', error);
        });
    }

    return (
        <CriarSalaStyle>
          <div className="login-form-wrap">
              <h2>Adicione seu nome</h2>
              <form onSubmit={handleSubmit}>
                  <input 
                      type="text" 
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Nome do jogador"
                      required 
                  />
                  <button type="submit" className='btn-login'>Continuar</button>
              </form>
          </div>
        </CriarSalaStyle>
      );
}
  
export default CriarSala;
