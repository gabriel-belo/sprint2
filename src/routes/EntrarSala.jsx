// import { useState, useEffect } from 'react';
// import { useNavigate} from "react-router-dom";
// import axios from 'axios';
// import { EntrarSalaStyle } from "../css/EntrarSalaStyle.jsx";

// const EntrarSala = () => {
//     const [nome, setNome] = useState('');
//     const [codigo, setCodigo] = useState('');
//     const [dados, setDados] = useState(null);
//     const [erro, setErro] = useState('');
//     const navigate = useNavigate();

//     // Carregar os dados iniciais do arquivo JSON via backend
//     useEffect(() => {
//         axios.get('http://localhost:3000/registros')
//             .then(response => {
//                 setDados(response.data);
//                 console.log("Dados carregados:", response.data); // Verificar os dados carregados
//             })
//             .catch(error => {
//                 console.error('Erro ao carregar os dados:', error);
//             });
//     }, []);

//     // Função para enviar os dados atualizados para o servidor
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Certificar-se de que o código digitado e o código no arquivo estão sendo comparados corretamente
//         if (dados && codigo.trim() === String(dados.codigo).trim()) {
//             // Verificar se já existe um jogador2, caso contrário, criar
//             const dadosAtualizados = {
//                 ...dados,
//                 jogador2: {
//                     nome: nome,
//                     pontuação: 0
//                 }
//             };

//             // Envia os dados atualizados para o servidor
//             axios.post('http://localhost:3000/update-registros', dadosAtualizados)
//                 .then(response => {
//                     console.log(response.data.message);
//                     // Atualiza os dados no estado e redireciona para a página Sala
//                     setDados(dadosAtualizados);
//                     navigate('/sala');
//                 })
//                 .catch(error => {
//                     console.error('Erro ao atualizar os dados:', error);
//                 });
//         } else {
//             setErro('Código incorreto, tente novamente!');
//         }
//     };

//     return (
//         <EntrarSalaStyle>
//         <div className="login-form-wrap">
//             <h2>Adicione seu nome</h2>
//             <form className='login-form' onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     value={nome}
//                     onChange={(e) => setNome(e.target.value)}
//                     placeholder="Nome do jogador"
//                     required 
//                 />
//                 <h2>Adicione o código</h2>
//                 <input 
//                     type="text" 
//                     value={codigo}
//                     onChange={(e) => setCodigo(e.target.value)}
//                     placeholder="Código da sala"
//                     required 
//                 />
//                 <button className='btn-login' type="submit">Continuar</button>
//             </form>

//             {erro && <p style={{ color: 'red' }}>{erro}</p>}
//         </div>
//         </EntrarSalaStyle>
//     );
// };

// export default EntrarSala;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { EntrarSalaStyle } from "../css/EntrarSalaStyle.jsx";

// const EntrarSala = () => {
//     const [nome, setNome] = useState('');
//     const [dados, setDados] = useState(null);

//     // Carregar os dados iniciais do arquivo JSON via backend
//     useEffect(() => {
//         axios.get('http://localhost:5000/registros')
//             .then(response => {
//                 setDados(response.data);
//             })
//             .catch(error => {
//                 console.error('Erro ao carregar os dados:', error);
//             });
//     }, []);

//     // Função para enviar os dados atualizados para o servidor
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (dados) {
//             // Atualiza o nome no estado
//             const dadosAtualizados = { ...dados, jogador1: { ...dados.jogador1, nome } };

//             // Envia os dados atualizados para o servidor
//             axios.post('http://localhost:5000/update-registros', dadosAtualizados)
//                 .then(response => {
//                     console.log(response.data.message);
//                     setDados(dadosAtualizados);
//                 })
//                 .catch(error => {
//                     console.error('Erro ao atualizar os dados:', error);
//                 });
//         }
//     };

//     return (
//         <EntrarSalaStyle>
//         <div  className="login-form-wrap">
//             <h2>Adicione seu nome</h2>
//             <form className='login-form' onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     value={nome}
//                     onChange={(e) => setNome(e.target.value)}
//                     placeholder="Nome do jogador"
//                     required 
//                 />
//                 <button className='btn-login' type="submit">Continuar</button>
//             </form>

//             {dados && (
//                 <div>
//                     <h3>Jogador Atualizado</h3>
//                     <p>Nome: {dados.jogador1.nome}</p>
//                     <p>Pontuação: {dados.jogador1.pontuação}</p>
//                     <p>Código: {dados.codigo}</p>
//                 </div>
//             )}
//         </div>
//         </EntrarSalaStyle>
//     );
// };

// export default EntrarSala;

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { EntrarSalaStyle } from "../css/EntrarSalaStyle.jsx";

const EntrarSala = () => {
    const [nome, setNome] = useState('');
    const [codigo, setCodigo] = useState('');
    const [dados, setDados] = useState(null);
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    // Carregar os dados iniciais do arquivo JSON via backend
    useEffect(() => {
        axios.get('http://localhost:3000/registros')
            .then(response => {
                setDados(response.data);
                console.log("Dados carregados:", response.data); // Verificar os dados carregados
            })
            .catch(error => {
                console.error('Erro ao carregar os dados:', error);
            });
    }, []);

    // Função para enviar os dados atualizados para o servidor
    const handleSubmit = (e) => {
        e.preventDefault();

        // Certificar-se de que o código digitado e o código no arquivo estão sendo comparados corretamente
        if (dados && codigo.trim() === String(dados.codigo).trim()) {
            // Verificar se já existe um jogador2, caso contrário, criar
            const dadosAtualizados = {
                ...dados,
                jogador2: {
                    nome: nome,
                    pontuacao: 0
                }
            };

            // Envia os dados atualizados para o servidor
            axios.post('http://localhost:3000/update-registros', dadosAtualizados)
                .then(response => {
                    console.log(response.data.message);
                    // Atualiza os dados no estado e redireciona para a página Sala
                    setDados(dadosAtualizados);
                    navigate('/sala');
                })
                .catch(error => {
                    console.error('Erro ao atualizar os dados:', error);
                });
        } else {
            setErro('Código incorreto, tente novamente!');
        }
    };

    return (
        <EntrarSalaStyle>
        <div className="login-form-wrap">
            <h2>Adicione seu nome</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome do jogador"
                    required 
                />
                <h2>Adicione o código</h2>
                <input 
                    type="text" 
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    placeholder="Código da sala"
                    required 
                />
                <button className='btn-login' type="submit">Continuar</button>
            </form>

            {erro && <p style={{ color: 'red' }}>{erro}</p>}
        </div>
        </EntrarSalaStyle>
    );
};

export default EntrarSala;
