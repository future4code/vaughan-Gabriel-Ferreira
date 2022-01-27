import axios from "axios";
import React from "react";
import styled from 'styled-components'

const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  padding: 20px;
  border-radius: 5px;
`

const CardUsuario = styled.div `
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

export default class TelaListaUsuarios extends React.Component{
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = async() => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const header = {headers: {Authorization: 'gabriel-ferreira-vaughan'}}
        // axios.get(url, header)
        // .then((res) => {
        //     this.setState({usuarios: res.data})
        // })
        // .catch((err) => {
        //     alert("Ocorreu um erro, tente novamente.")
        // })

        try {
            const res = await axios.get(url, header)

            this.setState({usuarios: res.data})

        } catch (err) {
            alert("Ocorreu um erro, tente novamente.")
        }
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const header = {headers: {Authorization: 'gabriel-ferreira-vaughan'}}

        axios.delete(url, header)
        .then((res) => {
            alert("Usuário deletado com sucesso")
            this.pegarUsuarios()
        })
        .catch((err) => {
            alert("Ocorreu um erro, cheque o que você fez")
        })
    }

    render(){
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <CardUsuario key= {user.id}>
                    {user.name}
                    <button onClick={() => {this.deletarUsuario(user.id)}}> Delete </button>
                </CardUsuario>
            )
        })


        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <Title>Lista de Usuários</Title>
                {listaUsuarios}
            </div>
        )
    }
}