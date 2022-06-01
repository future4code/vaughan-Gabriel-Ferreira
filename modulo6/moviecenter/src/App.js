import { useEffect } from "react";
import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";
import { SubHeader } from "./components/SubHeader/SubHeader";


const App = () => {
  return (
    <>
      <Header/>
      <SubHeader/>
      <Body/>
    </>
  );
}

export default App;
