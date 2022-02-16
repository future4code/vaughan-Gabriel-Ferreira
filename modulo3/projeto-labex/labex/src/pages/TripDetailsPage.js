import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TripDetailsPage() {
  const navigate = useNavigate()

  const goToAdminHomePage = () => {
    navigate("/admin/trips/list")
  }

  useEffect(() => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-valle-vaughan/trip/La0C1ZiCbjgEyc9eseAr")
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error.response)
    })
  }, [])

  return (
    <div>
      <h1>TRIP DETAILS PAGE</h1>
      <button onClick={goToAdminHomePage}>Ir para tela de funcionários</button>
      <p>
  
      </p>
    </div>
  );
}
