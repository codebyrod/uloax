import styled from "styled-components"

export const Container = styled.div`
height: 5vw;
display: flex;
justify-content: space-around;
align-items: center;
padding: 0 1rem;
background-color: #1a1a1a;
color: #ffffff ;
`
export const BoxImg = styled.picture`
width: 30vw;
`

export const Lista = styled.ul`
width: 45vw;
display: flex;
justify-content: space-around;
align-items: center;
text-transform: capitalize;
cursor: pointer;
font-size: 1.4vw;

ul{
    &:hover{
        color: #f8ca11;
    }
}
`
