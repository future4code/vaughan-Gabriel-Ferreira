import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminHomePage() {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate("/")
  }

  const goToCreateTripPage = () => {
    navigate("/admin/trips/create")
  }

  const goToTripDetailsPage = () => {
    navigate("/admin/trips/:id")
  }

  const goToLoginPage = () => {
    navigate("/login")
  }

  return (
    <div>
      <h1>ADMIN HOME PAGE</h1>
      <button onClick={goToHomePage}>Home</button>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      <button onClick={goToTripDetailsPage}>Detalhes das Viagens</button>
      <button onClick={goToLoginPage}>Tela de Login</button>
    </div>
  );
}
