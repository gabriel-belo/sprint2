import styled from "styled-components";
export const CorridasStyle =styled.body`

font-family: "Inter Tight", sans-serif;

/*Corridas*/


.titulo{
    font-size: 3rem;
    line-height: 4.4rem;
    font-weight: 600;
    text-transform: uppercase;
    color: black;
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
    // box-sizing:border-box;
    width: 300px;
    height: 400px;
    background-color: #737373;
    border-radius: 5px;
}

.circuito{
    width:300px;
    height:160px;
    text-align: center;
    margin-bottom: 3rem;
}

.info-pais{
    display: flex;
    text-align: center;
}
.img-bandeira{
    width: 65px;
    height: 45px;
}

//chatgpt
.info-pais {
  display: flex;
  align-items: center;
  justify-content: center;
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

.corrida h1, .corrida h3, .corrida p {
  margin: 5px 0;
}

.corrida img.img-bandeira, .corrida p {
  display: inline-block;
  vertical-align: middle;
}

.border {
  width: 100%;
  height: 2px;
  background-color: #000;
  margin: 10px 0;
}

`