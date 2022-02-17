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

  const onSubmitLogin = (event) => {
    event.preventDefault()
    const body = {
      email: email,
      password: password
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/login', body)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      goToAdminHomePage()
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <button onClick={goToHomePage}>Home</button>
        <p>
          <form onSubmit={onSubmitLogin}>
            <input 
              placeholder="e-mail"
              value={email}
              onChange={onChangeEmail}
              type='email'
              required
            />
            <input 
              placeholder="senha"
              value={password}
              onChange={onChangePassword}
              type="password"
              pattern="^.{3,}$"
              title="A senha precisa ter pelo menos 3 caracteres."
              required
            />
            <button>Enviar</button>
          </form>
        </p>
    </div>
  );
}
