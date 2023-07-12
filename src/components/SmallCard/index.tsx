import React, { useCallback } from "react";
import { Unit } from "../../utils/interfaces";
import {
  CardWrapper,
  DeadIndicator,
  InfoWrapper,
  SmallCardImg,
  SmallCardWrapper,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSource,
  setBlueTeamAction,
  setRedTeamAction,
  setSource,
} from "../../store/gameSlice";
import { RootState } from "../../store";
import { TARGET_UNITS } from "../../utils/constants";
import { blueTeamValidation, redTeamValidation } from "../../utils/functions";

interface SmallCardProps {
  player: Unit;
}

export default function SmallCard({ player }: SmallCardProps) {
  const playerType: string = Object.getPrototypeOf(player.constructor).name;
  const { source, sourceType, blueTeam, redTeam } = useSelector(
    (state: RootState) => state.gameSlice
  );

  const sourceValidation = useCallback(
    () =>
      source?.team === player.team &&
      source?.id === player.id &&
      !player.paralyzed
        ? player.team
        : null,
    [source]
  );
  const targetValidation = useCallback(() => {
    if (!source) return undefined;
    if (sourceType === "HealerSingle") {
      if (source?.team === player.team) return source.team;
      return null;
    } else if (sourceType === "Melee") {
      if (source.team === "red") {
        return redTeamValidation(source, player, blueTeam) ? source.team : null;
      } else {
        return blueTeamValidation(source, player, redTeam) ? source.team : null;
      }
    } else if (source.team !== player.team) {
      return source.team;
    }
    return null;
  }, [source]);

  const dispatch = useDispatch();

  function clickHandler() {
    if (source && player.id === source.id && player.team === source.team) {
      dispatch(removeSource());
      return;
    }
    if (source) {
      if (targetValidation()) {
        if (source.team === "blue")
          dispatch(setBlueTeamAction({ target: player, source }));
        else dispatch(setRedTeamAction({ target: player, source }));
        dispatch(removeSource());
      }
    } else {
      if (player.paralyzed) return;
      if (TARGET_UNITS.includes(playerType)) {
        dispatch(setSource(player));
      } else {
        if (player.team === "blue")
          dispatch(setBlueTeamAction({ source: player }));
        else dispatch(setRedTeamAction({ source: player }));
      }
    }
  }
  return (
    <SmallCardWrapper>
      <CardWrapper
        onClick={clickHandler}
        dead={player.HP === 0}
        source={sourceValidation()}
        target={targetValidation()}
      >
        <DeadIndicator
          dead={player.HP === 0}
          paralyzed={player.paralyzed}
        ></DeadIndicator>
        <SmallCardImg alt={player.name} src={player.img} />
        <InfoWrapper>
          <p>Name: {player.name}</p>
          <p>Type: {playerType}</p>
          <p>HP: {player.HP}</p>
        </InfoWrapper>
      </CardWrapper>
    </SmallCardWrapper>
  );
}
