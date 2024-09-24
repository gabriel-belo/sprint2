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

.navigation-header{
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

.navLink::after {
    text-decoration:underline;
    width: 0;  //Inicialmente a linha tem 0 largura  
    transition: width 0.3s ease-in-out;  //Animação suave 
    }

.navLink:hover::after {
    width: 100%; //A linha se expande para 100% do tamanho do link
}

.btn-icon-header{
    display: none;
    background-color: transparent;
    border:none;
    color: var(--color-white);
    cursor: pointer;
}

@media screen and (max-width: 768px){
    .btn-icon-header{
        display:block;
    }


.navigation-header {
        position: absolute;
        flex-direction: column;
        top: 0;
        background-color: var(--color-dark5);
        height: 100%;
        width: 35vw;
        padding:1em;
        animation-duration: 1s;
        margin-left: -100vw;
    
}
    

`
 