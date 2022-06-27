import styled from "styled-components";

export const BodyContainer = styled.div`
    background-color: black;
    color: white;
    font-size: 5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    
`

export const SearchBarContainer = styled.div`

    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button{
        height: 40px;
        width: 20%;
        margin-top: 10%;
    }

    input{
        height: 50px;
        width: 450px;
        font-size: 50px;
    }
`