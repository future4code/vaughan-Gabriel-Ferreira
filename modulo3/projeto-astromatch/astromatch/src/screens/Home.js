import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid black;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  img {
    width: 50%;
  }
`;

export default function Home() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(profile);

  return (
    <CardContainer>
      <p>
        {profile.name}, {profile.age} anos
      </p>
      <img src={profile.photo} />
      <p>{profile.bio}</p>
    </CardContainer>
  );
}
