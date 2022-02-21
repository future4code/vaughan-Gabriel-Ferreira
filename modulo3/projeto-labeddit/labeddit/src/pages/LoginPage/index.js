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
  }
`;

const LoginPage = () => {
  return (
    <div>
      <Title>LOGIN</Title>
      <Form>
        <input 
        placeholder="e-mail" 
        type="email" 
        required />

        <input
          placeholder="senha"
          type="password"
          pattern="^.{3,}"
          required
        />
        <button>Enviar</button>
      </Form>
    </div>
  );
};

export default LoginPage;
