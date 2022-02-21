import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TripCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`
const CardsContainer = styled.div`
  margin: 5% ;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5%;
`

export default function TripsListPage() {
  const navigate = useNavigate()
  const [allTrips, setAllTrips] = useState([])
  useEffect(() => {
    getTrips()
  }, [])

  const goToHomePage = () => {
    navigate("/")
  }

  const goToApplicationFormPage = () => {
    navigate("/trips/application")
  }

  const getTrips = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-valle-vaughan/trips')
    .then((response) => {
      console.log('Deu certo!', response.data.trips)
      setAllTrips(response.data.trips)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  console.log('AllTrips é:', allTrips)

  const newAllTrips = allTrips.map((item) => {
    return (
      <TripCard key={item.name}>
        <h3>{item.name}</h3>
        <p>Descrição: {item.description}</p>
        <p>Planeta: {item.planet}</p>
        <p>Data: {item.date}</p>
        <p>Duração: {item.durationInDays} dias</p>
      </TripCard>
    )
  })
  
  

  return (
    
    <div>
      <h1>TRIPS LIST PAGE</h1>
      <button onClick={goToHomePage}>Home</button>
      <button onClick={goToApplicationFormPage}>Fazer formulário</button>
      <CardsContainer>
      {newAllTrips}
      </CardsContainer>
    </div>
  );
}
