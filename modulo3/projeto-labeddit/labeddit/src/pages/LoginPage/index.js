import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import RegisterPage from '../RegisterPage';
// import FeedPage from '../FeedPage';
// import PostPage from '../PostPage';
import { goToRegisterPage, goToFeedPage } from "../../routes/coordinator";
import { Title, Form, ButtonDiv } from "./styled";
import { BASE_URL } from "../../constants/urls";
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const logIn = (event) => {
    event.preventDefault()
    const body = {
      email: email,
	    password: password
    }

    axios
    .post(`${BASE_URL}/users/login`, body)
    .then((response) => {
      console.log('Funcionou!', response.data.token)
      localStorage.setItem('token', response.data.token)
      goToFeedPage(navigate)
    })
    .catch((err) => {
      console.log('Não funcionou', err)
    })
  }  
  
  return (
    <div>
      <Title>LOGIN</Title>
      <Form onSubmit={logIn}>
        <input 
        placeholder="E-mail" 
        onChange={onChangeEmail}
        value={email}
        type="email" 
        />

        <input
          placeholder="Senha"
          type="password"
          onChange={onChangePassword}
          value={password}
          pattern="^.{3,}"
        />
        
        <button>Entrar</button>
      </Form>
      <ButtonDiv>
        <button onClick={() => goToRegisterPage(navigate)}>Cadastrar-se</button>
      </ButtonDiv>
    </div>
  );
};

export default LoginPage;
