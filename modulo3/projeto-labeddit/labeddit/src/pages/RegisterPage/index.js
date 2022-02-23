import React, { useState } from "react";
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import RegisterPage from '../RegisterPage';
// import FeedPage from '../FeedPage';
// import PostPage from '../PostPage';
// import styled from "styled-components";
import { Title, Form } from "../LoginPage/styled";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { goToFeedPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()
    const body = {
     username: username,
	   email: email,
	   password: password
    }
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((response) => {
      console.log('Funcionou!!', response)
      localStorage.setItem('token', response.data.token)
      goToFeedPage(navigate)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const onChangeUserName = (event) => {
    setUsername(event.target.value)
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div>
      <Title>Cadastro</Title>
      <Form onSubmit={onSubmit}>
        <input 
        placeholder="Nome de usuário" 
        type="name"
        value={username} 
        onChange={onChangeUserName}
        required />

        <input 
        placeholder="E-mail" 
        type="email" 
        value={email}
        onChange={onChangeEmail}
        required />

        <input
          placeholder="Senha"
          type="password"
          pattern="^.{3,}"
          value={password}
          onChange={onChangePassword}
          required
        />
        
        <button>Criar conta</button>        

      </Form>
    </div>
  );
};

export default RegisterPage;