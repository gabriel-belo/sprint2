import styled from "styled-components";
export const NavStyle = styled.header `

font-family: "Inter Tight", sans-serif;


//background-color: blue; 
margin:0;
padding:0;

.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logos{
    display:flex;
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

.links{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    padding-right: 20px;
}

.navLink{
    font-size:20px;
    font: bold;
    color: black;
    text-decoration: none;
}

navLink::after {
    text-decoration:underline;
    width: 0;  //Inicialmente a linha tem 0 largura  
    transition: width 0.3s ease-in-out;  //Animação suave 
    }

navLink:hover::after {
    width: 100%; //A linha se expande para 100% do tamanho do link
}


`
