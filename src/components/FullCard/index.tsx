import React from "react";
import {
  FullCardImg,
  FullCardWrapper,
  PStyled,
  PercentHP,
  TitleText,
} from "./styles";
import { Unit } from "../../utils/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { removeHover, setHover } from "../../store/gameSlice";

interface FullCardProps {
  player: Unit;
}

export default function FullCard({ player }: FullCardProps) {
  const source = useSelector((state: RootState) => state.gameSlice.source);
  const playerType: string = Object.getPrototypeOf(player.constructor).name;
  const dispatch = useDispatch();
  function onHover() {
    dispatch(setHover(player));
  }
  function onHoverLeave() {
    dispatch(removeHover());
  }
  return (
    <>
      <FullCardWrapper
        enemy={source?.team === player.team}
        onMouseEnter={onHover}
        onMouseLeave={onHoverLeave}
        source={player.id === source?.id}
      >
        <FullCardImg alt={player.name} src={player.img} />
        <TitleText>{player.name}</TitleText>
        <PStyled>
          HP:{player.HP}/{player.maxHP}
        </PStyled>
        <PStyled>Type: {playerType}</PStyled>
        <PercentHP
          enemy={source?.team === player.team}
          source={player.id === source?.id}
          percent={(player.HP / player.maxHP) * 100}
        ></PercentHP>
      </FullCardWrapper>
    </>
  );
}
