import styled from "styled-components";

export const Container = styled.div `
margin-top: 8%;
background-color: #292828;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 7%;
`
export const BoxAdress = styled.div` 
width: 20%;
color: #ebebeb;

h3{
    font-size: 200%;
    text-transform: capitalize;
}

p{
    margin-top: 10%;
    font-size: 100%;
    line-height: 150%;
}
`
export const BoxLinks = styled.div` 
width: 20%;
color: #ebebeb;

h3{
    font-size: 200%;
    text-transform: capitalize;
}

nav{
    margin-top: 10%;
}
`

export const LinkItems = styled.div`
font-size: 100%;
text-transform: capitalize;
line-height: 200%;
cursor: pointer;
span{
    img{
        margin-right: 10%;
    }
}
`

export const BoxFollowUs = styled.div` 
width: 20%;
color: #ebebeb;

h3{
font-size: 200%;
text-transform: capitalize;
}
`
export const FollowItem = styled.div` 
margin-top: 10%;
cursor: pointer;
div{
    display: flex;
    height: 2vw;
    img{
        margin-right: 5%;
        height: 80%;
    }
}
`

export const BoxNewsletter = styled.div` 
width: 23%;
height: 13vw;
color: #ebebeb;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
cursor: pointer;

h3{
    font-size: 200%;
    text-transform: capitalize;
}

input{
    outline: none;
    border: none;
    width: 19vw;
    height: 3.5vw;
    border-radius: 4px;
    padding: 3%;
    font-size: 110%;
}

button{
    outline: none;
    border: none;
    width: 12vw;
    height: 3.5vw;
    color: #eceaea;
    background-color: #fecf3d;
    font-weight: 600;
    font-size: 150%;
    border-radius: 5px;
    cursor: pointer;
}

`

