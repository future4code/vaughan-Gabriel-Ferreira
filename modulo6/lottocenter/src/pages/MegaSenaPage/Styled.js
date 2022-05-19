import styled from 'styled-components'

export const Root = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #6BEFA3;
`

export const Header = styled.div`
    background-color: #6BEFA3;
    height: 50vh;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 42.5vh;
    justify-content: space-evenly;
    align-items: center;

    select{
        border: 1px solid #EFEFEF;
        padding: 2%;
        border-radius: 5%;
    }

    img{
        width: 10%;
        color: white;
    }

    h2{
        color:white;
    }

    p{
        color: white;
    }
`

export const RoundedBorder = styled.div`
    background-color: #EFEFEF;
    height: 5vh;
    width: 100vw;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
`

export const Footer = styled.div`
    background-color: #EFEFEF;
    height: 45vh;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;

    p{
        text-align: center;
    }
`

export const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: white;
    height: 200%;
    width: 10%;
    border-radius: 50%;    
    margin-right: 4%;
`

export const Container = styled.div`
    display:flex;
    justify-content: center;
`