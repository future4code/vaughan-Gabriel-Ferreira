import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Matchs() {
  const [matchesList, setMatchesList] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-valle/matches"
      )
      .then((res) => {
        setMatchesList(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      MATCH SCREEN
      {matchesList.map((profile) => {
        return <p>{profile.name}</p>;
      })}
    </div>
  );
}
