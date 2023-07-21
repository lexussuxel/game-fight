import React from "react";
import {
  FullCardImg,
  FullCardWrapper,
  PStyled,
  PercentHP,
  TitleText,
} from "./styles";
import { Unit } from "../../utils/interfaces";
import { UI_KIT } from "../../UI";
import { HELPER_TEXT } from "../../utils/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface FullCardProps {
  player: Unit;
  setHelperText: React.Dispatch<React.SetStateAction<string>>;
}

export default function FullCard({ player, setHelperText }: FullCardProps) {
  const source = useSelector((state:RootState)=> state.gameSlice.source)
  const playerType: string = Object.getPrototypeOf(player.constructor).name;
  function onHover() {
    setHelperText(playerType + ": " + HELPER_TEXT[playerType]);
  }
  return (
    <>
      <FullCardWrapper
        type={UI_KIT.boxShadow[playerType]}
        onMouseEnter={onHover}
        source={player.id === source?.id }
      >
        <FullCardImg alt={player.name} src={player.img} />
        <TitleText>{player.name}</TitleText>
        <PStyled>HP:{player.HP}/{player.maxHP}</PStyled>
        <PStyled>Type: {playerType}</PStyled>
        <PercentHP
          source={player.id === source?.id}
          percent={(player.HP / player.maxHP) * 100}
          type={UI_KIT.colors[playerType]}
        ></PercentHP>
      </FullCardWrapper>
    </>
  );
}
