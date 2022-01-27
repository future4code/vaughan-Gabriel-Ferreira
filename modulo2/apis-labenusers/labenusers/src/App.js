import React from "react";
import axios from "axios";
import styled from "styled-components";
import TelaCadastro from './components/TelaCadastro.js'
import TelaListaUsuarios from './components/TelaListaUsuarios.js'

const Root = styled.div `
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  height: 97vh;
  width: 97vw;
`

export default class App extends React.Component {

  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista = {this.irParaLista}/>
      case "lista":
        return <TelaListaUsuarios irParaCadastro = {this.irParaCadastro}/>
      default:
        return <div>Erro! Página não encontrada D:</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render(){
    return (
      <Root>
        {this.escolheTela()}    
      </Root>
    );
  }
}