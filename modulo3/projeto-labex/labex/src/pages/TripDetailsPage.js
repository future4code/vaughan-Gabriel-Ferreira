import React from "react";
import { useNavigate } from "react-router-dom";

export default function TripDetailsPage() {
  const navigate = useNavigate()

  const goToAdminHomePage = () => {
    navigate("/admin/trips/list")
  }

  return (
    <div>
      <h1>TRIP DETAILS PAGE</h1>
      <button onClick={goToAdminHomePage}>Ir para tela de funcionários</button>
    </div>
  );
}
