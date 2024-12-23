// // server.js
// import express from 'express';
// import fs from 'fs';
// import bodyParser from 'body-parser';
// import cors from 'cors';

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());
// app.use(cors());

// // Endpoint para ler o arquivo registros.json
// app.get('/registros', (req, res) => {
//     fs.readFile('registros.json', 'utf8', (err, data) => {
//         if (err) {
//             return res.status(500).json({ message: 'Erro ao ler o arquivo' });
//         }
//         res.json(JSON.parse(data));
//     });
// });

// // Endpoint para atualizar apenas o nome do jogador1 no arquivo registros.json
// app.post('/update-registros', (req, res) => {
//     const { jogador1 } = req.body;

//     fs.readFile('registros.json', 'utf8', (err, data) => {
//         if (err) {
//             return res.status(500).json({ message: 'Erro ao ler o arquivo' });
//         }

//         const registros = JSON.parse(data);
//         registros.jogador1 = { ...registros.jogador1, ...jogador1 };

//         fs.writeFile('registros.json', JSON.stringify(registros, null, 2), (err) => {
//             if (err) {
//                 return res.status(500).json({ message: 'Erro ao escrever no arquivo' });
//             }
//             res.json({ message: 'Nome do jogador atualizado com sucesso!' });
//         });
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`);
// });


import express from'express';
import fs from'fs';
import bodyParser from'body-parser';
import cors from'cors';
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Endpoint para ler o arquivo registros.json
app.get('/registros', (req, res) => {
    fs.readFile('registros.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao ler o arquivo' });
        }
        res.json(JSON.parse(data));
    });
});



// Endpoint para atualizar o arquivo registros.json
app.post('/update-registros', (req, res) => {
    const novosDados = req.body;

    fs.writeFile('registros.json', JSON.stringify(novosDados, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao escrever no arquivo' });
        }
        res.json({ message: 'Arquivo atualizado com sucesso!' });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// import express from 'express';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import bodyParser from 'body-parser';
// import cors from 'cors';

// const app = express();
// const PORT = 3000;

// // Definindo __dirname em ES6
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(bodyParser.json());
// app.use(cors());

// // Endpoint para ler o arquivo registros.json
// app.get('/registros', (req, res) => {
//     const filePath = path.join(__dirname, 'registros.json');
    
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             return res.status(500).json({ message: 'Erro ao ler o arquivo registros.json' });
//         }
//         res.json(JSON.parse(data));
//     });
// });

// // Endpoint para ler o arquivo dadosSuperTrunfo.json
// app.get('/dadosSuperTrunfo', (req, res) => {
//     const filePath = path.join(__dirname, 'dadosSuperTrunfo.json');
    
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             return res.status(500).json({ message: 'Erro ao ler o arquivo dadosSuperTrunfo.json' });
//         }
//         res.json(JSON.parse(data));
//     });
// });

// // Endpoint para atualizar o arquivo registros.json
// app.post('/update-registros', (req, res) => {
//     const novosDados = req.body;
//     const filePath = path.join(__dirname, 'registros.json');

//     fs.writeFile(filePath, JSON.stringify(novosDados, null, 2), (err) => {
//         if (err) {
//             return res.status(500).json({ message: 'Erro ao escrever no arquivo registros.json' });
//         }
//         res.json({ message: 'Arquivo atualizado com sucesso!' });
//     });
// });

// // Inicia o servidor
// app.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`);
// });
