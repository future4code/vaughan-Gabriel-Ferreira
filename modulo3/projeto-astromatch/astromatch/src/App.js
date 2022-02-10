import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "./screens/Home";
import Matchs from "./screens/Matches";

export default function App() {
  const [tela, setTela] = useState("home");

  useEffect(() => {
    renderizaTela;
  }, [tela]);

  const renderizaTela = () => {
    if (tela === "home") {
      return <Home />;
    } else {
      return <Matchs />;
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          setTela("home");
        }}
      >
        HOME
      </button>
      <button
        onClick={() => {
          setTela("matchs");
        }}
      >
        MATCHES
      </button>
      <button>CLEAR MATCHES</button>
      {renderizaTela()}
    </div>
  );
}
