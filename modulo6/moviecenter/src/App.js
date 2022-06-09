import { useEffect, useState } from "react";
import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";
import { SubHeader } from "./components/SubHeader/SubHeader";
import styled from "styled-components"

export const HeaderContainer = styled.div `
    height: 5vh;
    background-color: #5C16C5;
    color: white;
    display: flex;
    align-items: center;
    padding-left: 5%;
    font-family: 'Montserrat', sans-serif;
    font-size: 150%;
    input{
        margin-left: 1%;
    }
`


const App = () => {

  const [searchText, setSearchText] = useState("")

  return (
    <>
      <HeaderContainer>
            TMDB 
            <input
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            />
        </HeaderContainer>

      <SubHeader/>
      <Body searchText={searchText}/>
    </>
  );
}

export default App;
