import styled from "styled-components";
export const HomeStyle =styled.body`

font-family: "Inter Tight", sans-serif;
/* VIEW CAR */

section.car-view{
    padding: 40px 5%;
    overflow: hidden;
    background-image: linear-gradient(to bottom right, #dd2c2c, #000000);
}

.car-view h1{
    color: #fff;
    width: 500px;
    text-align: center;
    margin-left: 300px;
    margin-bottom: 20px;
}

.car-view p{
    color: #fff;
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

#iframe{
    width: 550px;
    height: 300px;
    border: none;
    overflow: hidden;
}

#iframe::-webkit-scrollbar { 
    display: none;
}
`