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
    height: 50vh;
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
    height: 50vh;
`