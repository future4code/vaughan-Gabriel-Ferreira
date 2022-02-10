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
  p {
    width: 80%;
    text-align: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 8%;
`;

const clear = () => {
  axios.put(
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
  );
};

export default function Home() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-valle/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((err) => {});
  };

  const choosePerson = () => {
    const body = {
      id: `${profile.id}`,
      choice: true,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-valle/choose-person",
        body
      )
      .then((res) => {
        getProfileToChoose();
      })
      .catch((err) => {});
  };

  return (
    <CardContainer>
      <p>
        {profile.name}, {profile.age} anos
      </p>
      <img src={profile.photo} />
      <p>{profile.bio}</p>
      <Buttons>
        <button
          onClick={() => {
            choosePerson();
          }}
        >
          Like
        </button>
        <button
          onClick={() => {
            getProfileToChoose;
          }}
        >
          X
        </button>
      </Buttons>
    </CardContainer>
  );
}
