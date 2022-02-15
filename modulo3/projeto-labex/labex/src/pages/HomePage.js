import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const goToTripsListPage = () => {
    navigate("/trips/list")
  }

  const goToLoginPage = () => {
    navigate("/login")
  }

  return (
    <div>
      <h1>HOME PAGE</h1>
      <button onClick={goToTripsListPage}>Lista de Viagens</button>
      <button onClick={goToLoginPage}>Área de funcionários</button>
    </div>
  );
}
