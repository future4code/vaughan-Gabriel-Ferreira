import React from 'react';
import styled from 'styled-components';

const Etapa3Style = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

class Etapa3 extends React.Component {

    state = {
        etapa: 3
    }

  render (){
    
    return (    
      <Etapa3Style>          
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <p>7. Por que você não terminou um curso de graduação?</p>
        <input/>
        <p>8. Você fez algum curso complementar?</p>
        <select>
            <option value = 'Não'>Não.</option>
            <option value = 'Curso técnico'>Curso técnico</option>
            <option value = 'Curso de Inglês'>Curso de Inglês</option>
        </select>
      </Etapa3Style>
    )
  }  
}

export default Etapa3