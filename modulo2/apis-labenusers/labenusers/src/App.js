import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components'

// const getPlaylist=()=>{
//   axios.get(url, header).then().catch()
// }

// const postPlaylist=()=>{
//   axios.post(url, body, header).then().catch()
// }

export default class App extends React.Component {
  state = {
    users: [],
    inputValue: "",
    emailValue:""
  }

  handleInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleEmail = (event) => {
    this.setState({emailValue: event.target.value})
  }


  createUser = () => {
    const createUserUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const body = {name: this.state.inputValue, email: this.state.emailValue}
    const header = {headers:{Authorization: "gabriel-ferreira-vaughan"}}
    axios
    .post(createUserUrl, body, header)
    .then((response)=>{
      alert("Usuário criado com sucesso")
    })
    .catch((error)=>{
      console.log(error.response)
      alert("Erro")
    })
  }

  render(){

    const userList = this.state.users.map((user) => {})

  return (
    <>
      
      <div>
        <button>Trocar de Tela</button>
      </div>

      <div>
        <input
          type={'text'}
          placeholder='Nome'
          onChange={this.handleInput}
          value={this.state.inputValue}
        />

        <input
          type={'text'}
          placeholder='E-mail'
          onChange={this.handleEmail}
          value={this.state.emailValue}
        />
      </div>

      <button onClick={this.createUser}>Criar Usuário</button>
    
    </>
  );
 }
}