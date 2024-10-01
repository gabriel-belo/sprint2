import styled from "styled-components";
export const HomeStyle =styled.body`

font-family: "Inter Tight", sans-serif;
margin:0;
padding:0;
width: 100%;

.titulo{
    font-size: 3rem;
    line-height: 4.4rem;
    font-weight: 600;
    text-transform: uppercase;
    color: black;
}

.sub-titulo{
    font-size: 1rem;
    line-height: 2.4rem;
    font-weight: 500;
    text-transform: uppercase;
    color: black;
}

section.slider{
    margin: 0 auto;
    width: 100%;
    height: auto;
    padding: 0;
    overflow: hidden;
    background-image: linear-gradient(to top right, #353535, #dddddd);
}

.slider-content{
    width: 400%;
    height: auto;
    display: flex;
}

.slider-content input, .img-mobile{
    display: none;
}

.slide-box{
    width: 25%;
    height: auto;
    position: relative;
    text-align: center;
    transition: 1s;
}

.slide-box img{
    width: 100%;
}

.nav-manual, .nav-auto{
    position: absolute;
    width: 100%;
    margin-top: 45%;
    display: flex;
    justify-content: center;
}

.nav-manual .manual-btn, .nav-auto div{
    border: 1px solid #e00606;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.2s;
}

.nav-manual .manual-btn:not(:last-child), .nav-auto div:not(:last-child){
    margin-right: 10px;
}

.nav-manual .manual-btn:hover{
    background-color: #e00606;
}

#radio1:checked ~ .nav-auto .nav-btn1, #radio2:checked ~ .nav-auto .nav-btn2, #radio3:checked ~ .nav-auto .nav-btn3{
    background-color: #e00606;
}

#radio1:checked ~ .primeiro{
    margin-left: 0%;
}
#radio2:checked ~ .primeiro{
    margin-left: -25%;
}
#radio3:checked ~ .primeiro{
    margin-left: -50%;
}


// .section.slider{
//     margin: 0 auto;
//     width: 100%;
//     height: auto;
//     padding: 0;
//     overflow: hidden;
//     background-image: linear-gradient(to top right, #353535, #dddddd);
// }

// .slider-content{
//     width: 400%;
//     height: auto;
//     display: flex;
// }

// .slider-content input, .img-mobile{
//     display: none;
// }

// .slide-box{
//     width: 25%;
//     height: auto;
//     position: relative;
//     text-align: center;
//     transition: 1s;
// }

// .slide-box img{
//     width: 100%;
// }

// .nav-manual, .nav-auto{
//     position: absolute;
//     width: 100%;
//     margin-top: 45%;
//     display: flex;
//     justify-content: center;
// }

// .nav-manual .manual-btn, .nav-auto div{
//     border: 1px solid #e00606;
//     padding: 10px;
//     border-radius: 50%;
//     cursor: pointer;
//     transition: 0.2s;
// }

// .nav-manual .manual-btn:not(:last-child), .nav-auto div:not(:last-child){
//     margin-right: 10px;
// }

// .nav-manual .manual-btn:hover{
//     background-color: #e00606;
// }

// #radio1:checked ~ .nav-auto .nav-btn1, #radio2:checked ~ .nav-auto .nav-btn2, #radio3:checked ~ .nav-auto .nav-btn3{
//     background-color: #e00606;
// }

// #radio1:checked ~ .primeiro{
//     margin-left: 0%;
// }
// #radio2:checked ~ .primeiro{
//     margin-left: -25%;
// }
// #radio3:checked ~ .primeiro{
//     margin-left: -50%;
// }

/*Corridas*/

.calendario{
    margin-top: 60px;
    // border: 1rem solid;
    align-items:center;
}

.estrutura-titulo{
    display:flex;
    justify-content: space-evenly;
}

.pistas{
    display: flex;
    flex-wrap: wrap; /* Permite que os itens quebrem linha */

    justify-content: space-evenly;
}


.corrida {
    padding: 1.5rem;
    flex: 0 0 auto;
    margin: 10px;
    box-sizing:border-box;

    width: 250px;
    background-color: #737373;
    border-radius: 5px;
}


.info-pais{
    display: flex;
    text-align: center;
    font-weigth: 200px;
    font-size: 1.5rem;
}

.info-pais img, .corrida img.img-bandeira {
  width: 40px;
  height: 25px;
  margin-right: 10px;
}

.info-pais p, .corrida p {
  margin: 0;
  text-align: center;
}

.border {
  width: 100%;
  height: 2px;
  background-color: #000;
  margin: 10px 0;
}

.button{
    display: flex;          /* Torna a div um container flex */
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center;    /* Centraliza verticalmente (se necessário) */
    height: 100px;
    
}
.texto-button{
    display:flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center;    /* Centraliza verticalmente (se necessário) */
    font-size:15px;
    font-family:Arial;
    width:110px;
    height:40px;
    border-width:1px;
    color:#fff;
    cursor: pointer;
    border-color:#241d13;
    font-weight:bold;
    border-top-left-radius:0px;
    border-top-right-radius:0px;
    border-bottom-left-radius:0px;
    border-bottom-right-radius:0px;
    box-shadow:inset 0px 34px 0px -15px rgba(179, 67, 50, 1);
    text-shadow:inset 0px -1px 0px #7a2a1d;
    background:#a73f2d;
    text-decoration: none
}
.texto-button:hover {
    background: #b34332

}

// VIEW CAR 

/* Estilos para o slider */
.slider {
  position: relative;
  z-index: 1; /* O slider fica atrás do menu aberto */
}

.slide-box {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
}

.img-desktop {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
section.slider{
    margin: 0 auto;
    width: 100%;
    height: auto;
    padding: 0;
    overflow: hidden;
    background-image: linear-gradient(to top right, #353535, #dddddd);
}
section.car-view{
    padding: 40px 5%;
    overflow: hidden;
    // background-image: linear-gradient(to bottom right, #dd2c2c, #000000);
}

.car-view h1{
    color: black;
    width: 500px; 
    margin-bottom: 20px;
}

.car-view p{
    color: black;
    text-align: justify;
    margin-bottom: 50px;
}

section.car-view .flex{
    align-items: center;
    justify-content: center;
    gap: 50px;
}

#img-car-view{
    width: 600px;
}

iframe#iframe{
    width: 550px;
    height: 300px;
    border: none;
    overflow: hidden;
}

iframe#iframe::-webkit-scrollbar { 
    display: none;
}

@media screen and (max- width: 590px){
    iframe#iframe{
        width: 350px;
    }

}
// NOTICIAS
.noticias{
 
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.noticia{

    width: 350px;
    height: 200px;
    background-color: #414141;
    color: white;
    padding-top: 30px;
    margin: 10px;
    border-radius: 5px;
}

.infos{
    // border:5px solid;
    display:flex;
    align-items: center;
}

.noticia-img{
    margin-top: 0px;
    margin-left: 10px;
    width: 150px;
    higth: 180px;

}

.noticia-texto{

    width: 100%;
    font-weight: 600;
    line-height: 2rem;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    padding-left: 5px;
}

.button noticias{
    padding-bottom: 0px;
}
`