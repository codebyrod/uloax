import styled from "styled-components";

export const Container = styled.section`
background-color: #161c1e;
margin-top: 7%;

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
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Box = styled.div ` 
display: flex;
justify-content: space-between;
align-items: center;
width: 87vw;
`

export const BoxImg = styled.div`
width: 29%;

img{
    width: 100%;
}
`

export const Elements = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 18vw;
width: 71%;
padding-left: 4%;

h3{
    color: #2b3436;
    font-weight: 400;
    font-size: 2vw;
}

p{
    width: 100%;
    line-height: 160%;
    font-size: 100%;
}

button{
    width: 16%;
    height: 23%;
    text-transform: uppercase;
    font-size: 1.2vw;
    background-color: #f8ca11;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    color: #fefefe;

    &:hover{
        background-color: #1a1a1a;
        transition: 200ms;
    }
}
`
export const ContainerDownload = styled.section`
`

export const BoxTitleUloax = styled.div`
height: 13vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h2{
    color: #2b3436;
    font-size: 3.7vw;
    font-weight: 400;
    margin-bottom: 0.7rem;;
    
}

span{
    color: #f4db31;
}

&::after{
        content: "";
        width: 130%;
        height: 1%;
        background-color: #2b3436;
    }
`

export const BoxDownload = styled.div`
height: 50vw;
position: relative;
`

export const Background = styled.img `
width: 100%;
z-index: 0;
position: absolute;
`
export const TitleDownload = styled.h3`
position: absolute;
z-index: 4;
top: 15%;
right: 37%;
font-size: 3.8vw;
font-weight: 400;
text-transform: uppercase;
color: #24292b;

`
export const TextApp = styled.h3`
position: absolute;
z-index: 4;
top: 28%;
right: 30%;
font-weight: 400;
text-transform: uppercase;
color: #fffcf4;
font-size: 3.7vw;
`

export const Taxi = styled.img `
width: 46%;
position: absolute;
z-index: 3;
top: 15%;
`
export const Playstore = styled.img `
width: 13%;
position: absolute;
bottom: 36%;
right: 36%;
`
export const Applestore = styled.img `
width: 13%;
position: absolute;
bottom: 27%;
right: 27%;
`
export const Phone = styled.img `
width: 23%;
position: absolute;
right: 3%;
top: 4%;
`


