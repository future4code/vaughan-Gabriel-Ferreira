import React from "react";
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import RegisterPage from '../RegisterPage';
// import FeedPage from '../FeedPage';
// import PostPage from '../PostPage';
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4em;
  margin-top: 10%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  input{
    margin: 1em;
  }
  button{
    padding: 0.2em;
    margin: 1em;
    width: 90px;
  }
`;

const RegisterPage = () => {
  return (
    <div>
      <Title>Cadastro</Title>
      <Form>
        <input 
        placeholder="Nome de usuário" 
        type="name" 
        required />

        <input 
        placeholder="E-mail" 
        type="email" 
        required />

        <input
          placeholder="Senha"
          type="password"
          pattern="^.{3,}"
          required
        />
        
        <button>Criar conta</button>        

      </Form>
    </div>
  );
};

export default RegisterPage;