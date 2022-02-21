import React from "react";
import { useNavigate } from "react-router-dom";

export default function CreateTripPage() {
  const navigate = useNavigate()

  const goToAdminHomePage = () => {
    navigate("/admin/trips/list")
  }

  return (
    <div>
      <h1>CREATE TRIP PAGE</h1>
      <button onClick={goToAdminHomePage}>Ir para home da tela dos funcionários</button>
    </div>
  );
}
