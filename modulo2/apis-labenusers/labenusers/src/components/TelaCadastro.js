import axios from "axios";
import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  padding: 20px;
  border-radius: 5px;
`

export default class TelaCadastro extends React.Component{
    state = {
        nome: '',
        email: '',
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        const header = {headers: {Authorization: 'gabriel-ferreira-vaughan'}}
        
        axios.post(url, body, header)
        .then((res) => {
            alert("Usuário cadastrado com sucesso!")
            this.setState({nome: "", email: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.props.irParaLista}>Ir para lista de usuários</button>
                <Title>Cadastro</Title>
                <input
                    placeholder="Nome"
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <input
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleEmail}
                />
                <button onClick={this.fazerCadastro}>Enviar</button>
                
            </div>
        )
    }
}