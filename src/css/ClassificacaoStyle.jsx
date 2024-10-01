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
    width: 100%; 
    overflow-x: auto; 
}



//Estilização chatgpt
.principal-tabela {
    width: 100%;
    border-collapse: collapse; 
    font-family: Arial, sans-serif;
    table-layout: auto;
    background-color: #f5f5f5; 
}

.cabecalho th {
    background-color: #2d2d2d;
    padding: 10px; 
    text-align: center;
    border: 1px solid #ddd;
    color: #eee; 
}

.corpo th, .corpo td {
    padding: 10px; 
    text-align: center;
    border: 1px solid #ddd;
}

.circuitos th {
    background-color: #eee; 
}

.pilotos .intro-pilotos {
    display: flex;
    align-items: center;
    gap: 10px;
}

.img-piloto {
    width: 40px; 
    height: auto;
    border-radius: 50%; 
}

.img-bandeira {
    width: 20px; 
    height: auto;
}

.posicao {
    font-weight: bold;
    color: #2d2d2d; 
}

.pilotos th, .pilotos td {
    background-color: #fff;
    border-bottom: 2px solid #ccc; 
}

.pilotos th {
    color: #2d2d2d;
}

.tabela-container {
    width: 100%;
    overflow-x: auto; 
    margin-top: 20px;
}

.tabela-container table {
    width: 100%; 
}
`
