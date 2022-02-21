import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 5%;
  justify-content: center;
  text-align: center;

  input{
    margin: 2%;
  }

  #txt{
    width: 200%;
  }

  button{
    width: 20%;
    margin-top: 8px;
    margin-left: 8px;
  }
`

export default function ApplicationFormPage() {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate("/")
  }

  const goToTripsListPage = () => {
    navigate("/trips/list")
  }

  return (
    <div>
      <h1>APPLICATION FORM PAGE</h1>
      <button onClick={goToHomePage}>Home</button>
      <button onClick={goToTripsListPage}>Lista de Viagens</button>
      <InputContainer>
      <input placeholder="Nome"
      />
      <input placeholder="Idade"
      />
      <input placeholder="Profissão"
      />
      <input placeholder="País"
      />
      <input id="txt" placeholder="Texto de aplicação"
      />
      <button>Enviar</button>
      </InputContainer>
    </div>
  );
}
