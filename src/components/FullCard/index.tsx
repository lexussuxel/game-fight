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
import { useDispatch } from "react-redux";
import { setHelperText } from "../../store/gameSlice";
import { HELPER_TEXT } from "../../utils/constants";

export default function FullCard({ player }: { player: Unit }) {
  const playerType: string = Object.getPrototypeOf(player.constructor).name;
  const dispatch = useDispatch();
  function onHover() {
    dispatch(setHelperText(playerType + ": " + HELPER_TEXT[playerType]));
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
