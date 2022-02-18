import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TripCard = styled.div`
  display: flex;
  border: 1px solid black;
  width: 30%;
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
      setAllTrips(response.data)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  console.log('ALO', allTrips) 

   const tripsList = state.allTrips.map((t) => {
    return (
      <div>
        {t.trips.name}
      </div>
    )
  })

  return (
    
    <div>
      <h1>TRIPS LIST PAGE</h1>
      <button onClick={goToHomePage}>Home</button>
      <button onClick={goToApplicationFormPage}>Fazer formulário</button>
      {tripsList}

    </div>
  );
}
