import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import EtapaFinal from './components/Final';

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class App extends React.Component {

  state = {
    etapa: 1
  }

  render (){

    const renderizarTela = () => {
      if(this.state.etapa === 1){return <Etapa1/>} else 
      if(this.state.etapa === 2){return <Etapa2/>} else
      if(this.state.etapa === 3){return <Etapa3/>} else
      if(this.state.etapa === 4){return <EtapaFinal/>} else 
      if(this.state.etapa === 5){this.setState({etapa: 1})} 
    }
    
    const proximaEtapa = () => {
      this.setState({etapa: this.state.etapa + 1})
    }
    
    return (
      <>     
        {renderizarTela()}
        <Button><p><button onClick={proximaEtapa}>Próxima etapa</button></p></Button>
      </>      
    )
  }  
}