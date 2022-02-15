import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate("/")
  }

  const goToAdminHomePage = () => {
    navigate("/admin/trips/list")
  }

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <button onClick={goToHomePage}>Home</button>
      <button onClick={goToAdminHomePage}>Login</button>
    </div>
  );
}
