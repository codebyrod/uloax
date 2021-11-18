import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
width: 100%;
height: 12%;
display: flex;
justify-content: space-around;
align-items: center;
padding: 0 1rem;
background-color: #1a1a1a;
position: fixed;
z-index: 10;
top: 0%;
`
export const BoxImg = styled(Link)`
width: 18%;

img{
    width: 100%;
}
`
export const Lista = styled.ul`
width: 45vw;
display: flex;
justify-content: space-around;
align-items: center;
`

export const Item = styled(Link)`
color: #ffffff;
text-transform: capitalize;
font-size: 1.4vw;

&:hover{
        color: #f8ca11;
    }
`

export const ContainerSlide = styled.div`
margin-top: 4rem;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
background-color: #1a1a1a;
align-items: center;
height: 40vw;
`

export const BoxLeft = styled.div`
width: 48vw;
height: 40vw;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-end;
`
export const BoxTxt = styled.div`
background-color: #f8ca11;
width: 30vw;
height: 10vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h3{
    font-weight: 400;
    text-transform: uppercase;
    font-size: 240%;
}
`

export const Figure = styled.div `
img{
    width: 39vw;
}
`
export const BoxTitle = styled.div` 
height: 3vw;
margin-bottom: 4%;
h1{
    font-size: 180%;
    font-weight: 400;
    color: #fefefe;
    text-align: center;
}
`

export const ContainerInput = styled.div`
background-color: #fefefe;
height: 25vw;
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 2% 0 2% 0;

h3{
    font-size: 200%;
    font-weight: 400;
    text-align: center;
}

`
export const BoxInput = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 44vw;
height: 14vw;

input{
    width: 90%;
    height: 22%;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #e1e1e1;
    padding-left: 3%;
    font-size: 150%;
    color: #353433;
    &::placeholder{
        text-transform: uppercase;
    }
}
`

export const BoxBtn = styled.div` 
display: flex;
justify-content: flex-end;
height: 5vw;
width: 95%;


button{
    outline: none;
    border: none;
    width: 30%;
    height: 90%;
    border-radius: 10px;
    text-transform: uppercase;
    font-size: 120%;
    background-color: #353433;
    color: #fefefe;
    &:hover{
        cursor: pointer;
        background-color: #f8ca11;
        color: #353433;
        transition: 400ms;
    }
}
`
