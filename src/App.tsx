import React from "react";
import NavBar from "./components/NavBar";
import { AppWrapper, RoundWrapper } from "./UI";
import Battlefield from "./components/Battlefield";
import { useSelector } from "react-redux";
import { RootState } from "./store";



function App() {
  const round = useSelector((state: RootState)=> state.gameSlice.round)

  return (
    <AppWrapper>
      <RoundWrapper><p>{round}</p></RoundWrapper>
      <NavBar id={1}/>
      <Battlefield/>
      <NavBar id={2}/>
    </AppWrapper>
      
  );
}

export default App;
