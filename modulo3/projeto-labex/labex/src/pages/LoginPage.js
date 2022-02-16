import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function LoginPage() {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate("/")
  }

  const goToAdminHomePage = () => {
    navigate("/admin/trips/list")
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: password
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/login', body)
    .then((response) => {
      console.log('Deu bom ', response.data)
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <button onClick={goToHomePage}>Home</button>
      <button onClick={goToAdminHomePage}>Login</button>
        <p>
          <input 
          placeholder="e-mail"
          value={email}
          onChange={onChangeEmail}
          />
          <input 
          placeholder="senha"
          value={password}
          onChange={onChangePassword}
          type="password"
          />
          <button onClick={onSubmitLogin}>Enviar</button>
        </p>
    </div>
  );
}
