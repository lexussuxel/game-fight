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

interface FullCardProps {
  player: Unit;
  setHelperText: React.Dispatch<React.SetStateAction<string>>;
}

export default function FullCard({ player, setHelperText }: FullCardProps) {
  const playerType: string = Object.getPrototypeOf(player.constructor).name;
  function onHover() {
    setHelperText(playerType + ": " + HELPER_TEXT[playerType]);
  }
  return (
    <>
      <FullCardWrapper
        type={UI_KIT.boxShadow[playerType]}
        onMouseEnter={onHover}
      >
        <FullCardImg alt={player.name} src={player.img} />
        <TitleText>{player.name}</TitleText>
        <PStyled>HP:{player.HP}</PStyled>
        <PStyled>Type: {playerType}</PStyled>
        <PercentHP
          percent={(player.HP / player.maxHP) * 100}
          type={UI_KIT.colors[playerType]}
        ></PercentHP>
      </FullCardWrapper>
    </>
  );
}
