import React, { useCallback, useEffect } from "react";
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
import { attack, init, defend, preAttack } from "./store/gameSlice";
import { HEAL_CLASSES, HELPER_TEXT, TARGET_CLASSES } from "./utils/constants";
import { Paralyzer } from "./utils/typeClasses";

function App() {
  const { round, source, currentTarget, hover } = useSelector(
    (state: RootState) => state.gameSlice
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(init());
  }, []);
  const buttonText = useCallback(() => {
    if (HEAL_CLASSES.some((healClass) => source instanceof healClass))
      return "Heal";
    else if (source instanceof Paralyzer) return "Paralyze";
    return "Attack";
  }, [source]);
  const attackButtonDisabled = useCallback(() => {
    if (!source?.paralyzed)
      if (
        !currentTarget &&
        TARGET_CLASSES.some((unitClass) => source instanceof unitClass)
      )
        return true;
    return false;
  }, [source, currentTarget]);

  const getHelperText = useCallback(() => {
    if (hover?.constructor) {
      const playerType: string = Object.getPrototypeOf(hover?.constructor).name;
      return playerType + ": " + HELPER_TEXT[playerType];
    }
    return "Description";
  }, [hover]);

  function attackButtonHandler() {
    dispatch(preAttack());
    setTimeout(() => {
      dispatch(attack());
    }, 200);
  }

  function defendButtonHandler() {
    dispatch(defend());
  }

  return (
    <AppWrapper>
      <RoundWrapper>
        <RoundCounter>
          <p>{round}</p>
        </RoundCounter>
        <EndRoundButton
          onClick={attackButtonHandler}
          disabled={attackButtonDisabled()}
        >
          {buttonText()}
        </EndRoundButton>
        <EndRoundButton onClick={defendButtonHandler}>Defend</EndRoundButton>
      </RoundWrapper>
      <NavBar />
      <Battlefield />
      <HelperTextWrapper>{getHelperText()}</HelperTextWrapper>
    </AppWrapper>
  );
}

export default App;
