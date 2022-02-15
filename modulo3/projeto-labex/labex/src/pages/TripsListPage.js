import React from "react";
import { useNavigate } from "react-router-dom";

export default function TripsListPage() {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate("/")
  }

  const goToApplicationFormPage = () => {
    navigate("/trips/application")
  }

  return (
    <div>
      <h1>TRIPS LIST PAGE</h1>
      <button onClick={goToHomePage}>Home</button>
      <button onClick={goToApplicationFormPage}>Fazer formulário</button>
    </div>
  );
}
