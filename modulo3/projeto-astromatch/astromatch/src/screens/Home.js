import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const HomeRoot = styled.div`
  width: 90%;
  height: 90%;
`;

const Name = styled.div`
  font-size: 200%;
  margin: 5%;
`;

const Bio = styled.div`
  font-size: 150%;
  margin: 5%;
  text-align: center;
`;

const CardContainer = styled.div`
  border: 1px solid black;
  border-radius: 5%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  img {
    float: left;
    width: 50%;
    height: 400px;
    object-fit: cover;
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
  button {
    border-radius: 50%;
    font-size: 200%;
    padding: 3%;
    background-color: white;
    margin: 3%;
  }
  #like {
    color: green;
    border-color: green;
    border-width: 3px;
  }
  #dislike {
    color: red;
    border-color: red;
    border-width: 3px;
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
    <HomeRoot>
      <CardContainer>
        <Name>
          {profile.name}, {profile.age} anos
        </Name>
        <img src={profile.photo} />
        <Bio>{profile.bio}</Bio>
        <Buttons>
          <button
            id="dislike"
            onClick={() => {
              getProfileToChoose();
            }}
          >
            X
          </button>
          <button
            id="like"
            onClick={() => {
              choosePerson();
            }}
          >
            ♥
          </button>
        </Buttons>
      </CardContainer>
    </HomeRoot>
  );
}
