import React from "react";
import {
  ButtonStyled,
  ButtonsWrapper,
  DescriptionText,
  NavWrapper,
  PlayersWrapper,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import FullCard from "../FullCard";
import { setBlueTeamDefend, setRedTeamDefend } from "../../store/gameSlice";

interface NavBarProps {
  setHelperText: React.Dispatch<React.SetStateAction<string>>;
  id: number;
}

export default function NavBar({ id, setHelperText }: NavBarProps) {
  const players = useSelector((state: RootState) =>
    id === 1 ? state.gameSlice.blueTeam : state.gameSlice.redTeam
  );
  const text = useSelector((state: RootState) =>
    id === 1
      ? state.gameSlice.blueUnitActionText
      : state.gameSlice.redUnitActionText
  );
  const dispatch = useDispatch();

  function buttonClickHandler() {
    dispatch(id === 1 ? setBlueTeamDefend() : setRedTeamDefend());
  }
  return (
    <NavWrapper reverse={id !== 1}>
      <ButtonsWrapper>
        <ButtonStyled onClick={buttonClickHandler}>Defend</ButtonStyled>
      </ButtonsWrapper>
      <DescriptionText>{text}</DescriptionText>
      <PlayersWrapper>
        {players.map((player, i) => (
          <FullCard key={i} player={player} setHelperText={setHelperText} />
        ))}
      </PlayersWrapper>
    </NavWrapper>
  );
}
