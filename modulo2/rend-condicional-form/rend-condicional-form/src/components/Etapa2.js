import React from 'react';
import styled from 'styled-components';

const Etapa2Style = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

class Etapa2 extends React.Component {

    state = {
        etapa: 2
    }

  render (){
    
    return (    
      <Etapa2Style>          
        <h1>ETAPA 2 - INFORMAÇÕES DO CURSO SUPERIOR</h1>
        <p>5. Qual curso?</p>
        <input/>
        <p>6. Qual unidade de ensino?</p>
        <input/>
      </Etapa2Style>
    )
  }  
}

export default Etapa2