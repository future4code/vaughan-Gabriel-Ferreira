import styled from "styled-components"

export const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    gap: 70px;
    img{
        width: 250px;
        height: 300px;
    }
`

export const MovieCard = styled.div`
    margin-top: 20px;
    margin-left: 15%;
    margin-right: 15%;
    display: flex;
    flex-direction: column;
    div{
        width: 250px;
    }
    font-family: "Roboto", sans-serif;
    font-weight: bold; 
`

export const MovieTitleContainer = styled.div`
    margin-bottom: 7px;
    margin-top: 5%;
`