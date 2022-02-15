import React from "react";
import AdminHomePage from "./pages/AdminHomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import TripsListPage from "./pages/TripsListPage";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Para o usuário escolher entre Área Administrativa e Lista de Viagens */}

        <Route path="/admin/trips/list" element={<AdminHomePage />} /> {/* Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas */}

        <Route path="/trips/application" element={<ApplicationFormPage />} /> {/* Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição */}

        <Route path="/admin/trips/create" element={<CreateTripPage />} /> {/* Formulário para o administrador criar uma nova viagem */}

        <Route path="/login" element={<LoginPage />} /> {/* Para fazermos login como administrador */}

        <Route path="/admin/trips/:id" element={<TripDetailsPage />} /> {/* Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela */}

        <Route path="/trips/list" element={<TripsListPage />} /> {/* Para vermos todas as viagens */}

        <Route path="*" element={<ErrorPage />} /> {/* Página de Erro */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
