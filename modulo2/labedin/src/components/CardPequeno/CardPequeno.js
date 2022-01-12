import React from 'react';
import './CardPequeno.css'
import styled from 'styled-components';

const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <h4>{props.categoria}&nbsp;</h4>

            <p>{props.textoCategoria}&nbsp;</p>
        </SmallCardContainer>
    )
}

export default CardPequeno;