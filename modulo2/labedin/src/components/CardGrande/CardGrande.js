import React from 'react';
import './CardGrande.css'
import styled from 'styled-components';

const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const BigCardImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const H4Style = styled.h4`
    margin-bottom: 15px;
`

const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <BigCardContainer>
            <BigCardImg src={ props.imagem } />
            <DivStyle>
                <H4Style>{ props.nome }</H4Style>
                <p>{ props.descricao }</p>
            </DivStyle>
        </BigCardContainer>
    )
}

export default CardGrande;