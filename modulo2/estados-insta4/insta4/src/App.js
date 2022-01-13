import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const NewPostContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  background-color: lightseagreen;
  margin: 0 35%;
  margin-bottom: 20px;
  padding: 30px 0  
`

class App extends React.Component {
  state = {

    postagens: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },

      {
        nomeUsuario: 'Gvalle',
        fotoUsuario: 'https://picsum.photos/40/40',
        fotoPost: 'https://picsum.photos/190/140'
      },

      {
        nomeUsuario: 'Anônimo',
        fotoUsuario: 'https://picsum.photos/30/30',
        fotoPost: 'https://picsum.photos/180/130'
      }
    ],

    valorInputNome: "",
    valorInputFoto: "",
    valorInputPost: ""

  }

  adicionaPostagem = () => {
    const novaPostagem = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPost
    }

    const novoPostagens = [...this.state.postagens, novaPostagem]
    this.setState({ postagens: novoPostagens})
    this.setState({
      valorInputNome:"",
      valorInputFoto:"",
      valorInputPost:""
    })
  }

  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value})
  }

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value})
  }  

  render() {
    const listaPostagens = this.state.postagens.map((info)=>{
      return(
        <>
        <MainContainer>
        <Post
          nomeUsuario= {info.nomeUsuario}
          fotoUsuario={info.fotoUsuario}
          fotoPost={info.fotoPost}
        />
      </MainContainer>
      <br/>
      </>              
      )
    })
    return (
      <>
      {listaPostagens}

      <NewPostContainer>
      <input
        value = {this.state.valorInputNome}
        onChange={this.onChangeInputNome}
        placeholder={"Nome"}
      />
      <input
        value = {this.state.valorInputFoto}
        onChange={this.onChangeInputFoto}
        placeholder={"Foto"}
      />
      <input
        value = {this.state.valorInputPost}
        onChange={this.onChangeInputPost}
        placeholder={"Post"}
      />
      <button onClick={this.adicionaPostagem}>Post</button>
      </NewPostContainer> 


      {/* <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>
      <br/>
      <MainContainer>
        <Post
          nomeUsuario={'Gvalle'}
          fotoUsuario={'https://picsum.photos/40/40'}
          fotoPost={'https://picsum.photos/190/140'}
        />
      </MainContainer>
      <br/>

      <MainContainer>
        <Post
          nomeUsuario={'Anônimo'}
          fotoUsuario={'https://picsum.photos/30/30'}
          fotoPost={'https://picsum.photos/180/130'}
        />
      </MainContainer> */}


      </>
      
    );
  }
}

export default App;