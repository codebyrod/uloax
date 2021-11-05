import styled from "styled-components";

export const Container = styled.section`
background-color: #161c1e;
`
export const BoxTitle = styled.div`
height: 12vw;
display: flex;
justify-content: center;
align-items: flex-end;

h2{
    color: #fefefe;
    font-size: 4vw;
}
`

export const ContainerCard = styled.section`
display: flex;
justify-content: center;
align-items: space-around;
flex-wrap: wrap;
background-color: #161c1e;
margin-bottom: 4vw;
`
export const BoxCard = styled.div`
width: 28%;
height: 35vw;
margin: 0 1%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
img{
    width: 90%;
}
`

export const Circle = styled.div ` 
width: 20%;
height: 20%;
border-radius: 50%;
background-color: #f8ca11;
position: relative;
top: 10%;
display: flex;
justify-content: center;
align-items: center;

p{
    font-size: 1.9vw;
    color: #fefefe;
}
`

export const Card = styled.div`
width: 100%;
height: 95%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 25% 10% 0 10%;
background-color:#fefefe;

h3{
    font-size: 2vw;
    font-weight: 400;
    color: #2b3436;
}

p{
    font-size: 1.6vw;
    text-align: center;
    padding: 0 10%;
    color: #2b3436;
}
`

export const ContainerBox = styled.div`
background-color:#fefefe;
`

export const Box = styled.div ` 
display: flex;
justify-content: space-around;
align-items: center;
`

export const Elements = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 18vw;
width: 65%;
padding-left: 4%;

h3{
    color: #2b3436;
    font-weight: 400;
    font-size: 2vw;
}

p{
    width: 90%;
    line-height: 150%;
}

button{
    width: 10vw;
    height: 3.2vw;
}

`

