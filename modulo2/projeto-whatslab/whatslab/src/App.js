import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;    
  align-items: center;
  background-color:lightskyblue;
  grid-template-rows: 90% 10%;
  width: 80%;
  height: 80vh;
  margin: auto;
  margin-top: 5px;
  border: 1px solid black;
  border-radius: 1%;
`

const NomePessoa = styled.div`
  font-size: 12px;
  font-weight: bold;
  color:darkblue;
  margin-left:20px;
  margin-top:8px;
`

const TextoPessoa = styled.div`
  font-size: 14px;
  margin-left: 15px;  
`

// const CaixaPrincipal = styled.div`
//   display: grid;    
//   align-items: center;
//   background-color:lightskyblue;
//   grid-template-rows: 90% 10%;
//   width: ;
//   height: 90%;
//   margin: auto;
//   margin-top: 5px;
// `

const FooterEnvio = styled.div`
  display:flex;
  justify-content:center;
  align-items:flex-end;  
`

class App extends Component {

  state = {
    mensagens: [
      {
      nomeUsuario: "Gabriel",
      mensagemUsuario:"E aí, vai testar meu App? ;D",
      },
    ],

    valorInputNome:"",
    valorInputMensagem:"",

  }

  adicionaMensagem = () => {
    const novaMensagem = {
      nomeUsuario: this.state.valorInputNome,
      mensagemUsuario: this.state.valorInputMensagem,
    }

    const mensagemNova = [...this.state.mensagens, novaMensagem]
    this.setState({mensagens: mensagemNova})
    this.setState({
      valorInputMensagem:"",
    })
  }

  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeInputMensagem = (event) => {
    this.setState({valorInputMensagem: event.target.value})
  }

  render(){
    const listaMensagens = this.state.mensagens.map((info) => {
      return (
        <>          
          <NomePessoa>{info.nomeUsuario}:</NomePessoa>
          <TextoPessoa>{info.mensagemUsuario}</TextoPessoa>
        </>
      )
    })
      return (
        <AppContainer>

            <div>
              <p>
              {listaMensagens}
              </p>
            </div>
            
            <FooterEnvio>
              <input
                value={this.state.valorInputNome}
                onChange={this.onChangeInputNome}
                placeholder='Nome'
              />
              <input
                value={this.state.valorInputMensagem}
                onChange={this.onChangeInputMensagem}
                placeholder='Mensagem'
              />
              <button onClick={this.adicionaMensagem}>Enviar</button>
            </FooterEnvio>

        </AppContainer>      
      );
    }
}

export default App;