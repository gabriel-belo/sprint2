import styled from "styled-components";
export const NavStyle = styled.header `

font-family: "Inter Tight", sans-serif;


background-color: #ffe9e9; 
margin:0;
padding:0;
width: 100%;

.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logos{
    display:flex;
    align-items:center;
}

#logo1{
    width: 200px;
    height: 50px;
    margin-top: 25px;
}

.logos h1{
    margin: 30px;
    font-weight: 500;
}

#logo2{
    margin-top: 0px;
    width: 280px;
}


.navbar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    padding-right: 20px;
}

.navLink{
    color: black; //aliceblue;
    padding: 10px 25px;
    border-radius: 50px;
    transition: 0.5s;
    margin: 0 5px;
    font-size:20px;
    font: bold;
    color: black;
    text-decoration: none;
}

.navLink::after {
    text-decoration:underline;
    width: 0;  //Inicialmente a linha tem 0 largura  
    transition: width 0.3s ease-in-out;  //Animação suave 
}

.navLink:hover::after {
    width: 100%; //A linha se expande para 100% do tamanho do link
}


 
.navLink:hover{
    background: white;
}

.nav {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: #fff;
        z-index: 10;
        }

        /* Menu lateral inicialmente escondido */
.navbar {
        display: none;
        position: fixed; /* Para manter o menu fixo na tela */
        top: 0;
        right: 0; /* Fixa o menu no lado direito da tela */
        height: 100vh; /* Faz o menu ocupar a altura total da tela */
        width: 0; /* Menu começa invisível com largura 0 */
        background-color: #333; /* Cor de fundo do menu */
        z-index: 100;
        overflow-x: hidden; /* Esconde o conteúdo quando o menu está fechado */
        transition: 0.3s ease; /* Animação suave para o aparecimento do menu */
}

        /* Quando o menu está aberto */
.navbar.active {
        width: 250px; /* Define a largura do menu quando ativo */
        display: block; /* Exibe o menu */
}

        /* Links de navegação */
.navLink {
        color: #fff;
        padding: 15px 20px;
        display: block;
        text-align: left;
        text-decoration: none;
}

 /* Estilo básico do ícone de fechar */
.close-icon {
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
  display: none; /* Inicialmente escondido */
}

/* Exibe o ícone de fechar quando o menu está ativo */
.close-icon.active {
  display: block;
}

.btn-icon-header{
    display: none;
    background-color: transparent;
    border:none;
    color: var(--color-white);
    cursor: pointer;
    font-size: 1.5rem;
     
}

// Tablet 768px
@media screen and (max-width: 990px){
    #logo1{
        width: 150px;
        height: 50px;
        margin-top: 25px;
    }

    .logos h1{
        margin: 30px;
        font-weight: 500;
    }

    #logo2{
        margin-top: 0px;
        width: 200px; 
    }


    .btn-icon-header{
        display:block;
    }

    // .navbar{
    //     height: 0;
    //     position: absolute;
    //     top: 80px;
    //     left: 0;
    //     right: 0;
    //     width: 100vw;
    //     transition: 0.2s;
    //     background: #010146 ;
    //     overflow: hidden;
    // }
    // .navbar.active {
    //     height: 450px;
    // }


    

}
    

`
 