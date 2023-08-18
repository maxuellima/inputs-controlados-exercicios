//Declare o estilo do fomulário aqui
import styled from "styled-components";

export const LayoutForm = styled.form`

display: flex;
flex-direction: column;
gap: 1rem;
height: 60vh;
width: 30vw;
display: flex;
`

export const LayoutLabel = styled.label`
display: flex;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 0.2rem;
color: grey;
font-family: Arial, Helvetica, sans-serif;
font-size: 12px;

input{
    border-radius: 10px;
    box-sizing: border-box;
    width: 60%;
    height: 5vh;
    padding: 1em;
    :hover{
        background-color: #141827;
        color: white;
    }
}
select{
    border-radius: 10px;
    box-sizing: border-box;
    width: 60%;
    height: 5vh;
}

`

export const Botao = styled.button`
width: 50%;
align-self: center;
height: 6vh;
border-radius: 10px;
:hover{
    background-color: #141827 ;
    color: white;
    cursor: pointer;
}
`