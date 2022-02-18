import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "./screens/Home";
import Matchs from "./screens/Matches";
import styled from "styled-components";

const Buttons = styled.div`
  margin-bottom: 5%;
`;

export default function App() {
  const [screen, setScreen] = useState("home");

  useEffect(() => {
    renderScreen;
  }, [screen]);

  const renderScreen = () => {
    if (screen === "home") {
      return <Home />;
    } else {
      return <Matchs props={clear} />;
    }
  };

  const clear = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-valle/clear"
      )
      .then(() => {
        console.log("perfis foram apagados");
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  return (
    <div>
      <Buttons>
        <button
          onClick={() => {
            setScreen("home");
          }}
        >
          HOME
        </button>
        <button
          onClick={() => {
            setScreen("matchs");
          }}
        >
          MATCHES
        </button>
        <button
          onClick={() => {
            clear();
          }}
        >
          CLEAR MATCHES
        </button>
      </Buttons>
      {renderScreen()}
    </div>
  );
}
