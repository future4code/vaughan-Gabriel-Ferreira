import React from "react";
import { useNavigate } from "react-router-dom";

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
    </div>
  );
}
