import React from "react";
import NavBar from "./components/NavBar";
import {
  AppWrapper,
  EndRoundButton,
  HelperTextWrapper,
  RoundCounter,
  RoundWrapper,
} from "./UI";
import Battlefield from "./components/Battlefield";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const round = useSelector((state: RootState) => state.gameSlice.round);
  const helperText = useSelector(
    (state: RootState) => state.gameSlice.helperText
  );
  return (
    <AppWrapper>
      <RoundWrapper>
        <RoundCounter>
          <p>{round}</p>
        </RoundCounter>
        <EndRoundButton>End Round</EndRoundButton>
      </RoundWrapper>
      <NavBar id={1} />
      <Battlefield />
      <NavBar id={2} />
      <HelperTextWrapper>{helperText}</HelperTextWrapper>
    </AppWrapper>
  );
}

export default App;
