import styled from "styled-components";
export const ClassificacaoStyle =styled.body`

font-family: "Inter Tight", sans-serif;

#titulo{
    font-size: 3rem;
    line-height: 4.4rem;
    font-weight: 600;
    text-transform: uppercase;
    color: black;

}
.conteiner{
    width: 100%; /* Largura fixa ou relativa */
    overflow-x: auto; /* Rolagem horizontal se necessário */
}

// .principal-tabela{
//     margin: 0px;
// }
// tr{
//     border: 2px solid;
//     margin: 0px;
// }
// th{
//     border: 2px solid;
//     margin: 0px;
// }
// .intro-pilotos{
//     width: 105px;
//     heigth: 160px;
// }

// .img-bandeira{
//     width: 60px;
//     height: 40px;
// }

// .img-piloto{
//     height: 80px;
//     width: 100%;
// }



//Estilização chatgpt
.principal-tabela {
    width: 100%;
    border-collapse: collapse; /* Remove espaços entre células */
    font-family: Arial, sans-serif;
    table-layout: auto;
    background-color: #f5f5f5; /* Cor de fundo da tabela */
}

.cabecalho th {
    background-color: #4CAF50; /* Cor de fundo do cabeçalho */
    color: white; /* Texto branco */
    padding: 10px; /* Espaçamento interno */
    text-align: center;
    border: 1px solid #ddd; /* Borda das células */
}

.corpo th, .corpo td {
    padding: 10px; /* Espaçamento interno das células */
    text-align: center;
    border: 1px solid #ddd;
}

.circuitos th {
    background-color: #eee; /* Cor de fundo para a linha dos circuitos */
}

.pilotos .intro-pilotos {
    display: flex;
    align-items: center;
    gap: 10px;
}

.img-piloto {
    width: 40px; /* Tamanho da imagem do piloto */
    height: auto;
    border-radius: 50%; /* Deixa a imagem circular */
}

.img-bandeira {
    width: 20px; /* Tamanho das bandeiras */
    height: auto;
}

.posicao {
    font-weight: bold;
    color: #333;
}

.pilotos th, .pilotos td {
    background-color: #fff;
    border-bottom: 2px solid #ccc; /* Borda inferior para cada linha */
}

.pilotos th {
    color: #4CAF50; /* Cor do texto do piloto */
}

.tabela-container {
    width: 100%;
    overflow-x: auto; /* Barra de rolagem horizontal */
    margin-top: 20px;
}

.tabela-container table {
    width: 100%; /* Faz a tabela ocupar 100% da largura do contêiner */
}
`
