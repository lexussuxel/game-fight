import React, { useState } from "react";
import NavBar from "./components/NavBar";
import {
  AppWrapper,
  EndRoundButton,
  HelperTextWrapper,
  RoundCounter,
  RoundWrapper,
} from "./UI";
import Battlefield from "./components/Battlefield";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { endRound } from "./store/gameSlice";

function App() {
  const round = useSelector((state: RootState) => state.gameSlice.round);
  const [helperText, setHelperText] = useState("");
  const dispatch = useDispatch();
  function endRoundHandler() {
    dispatch(endRound());
  }
  return (
    <AppWrapper>
      <RoundWrapper>
        <RoundCounter>
          <p>{round}</p>
        </RoundCounter>
        <EndRoundButton onClick={endRoundHandler}>End Round</EndRoundButton>
      </RoundWrapper>
      <NavBar id={1} setHelperText={setHelperText} />
      <Battlefield />
      <NavBar id={2} setHelperText={setHelperText} />
      <HelperTextWrapper>{helperText}</HelperTextWrapper>
    </AppWrapper>
  );
}

export default App;
