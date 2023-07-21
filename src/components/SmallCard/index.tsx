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
import { RootState } from "../../store";
import { meleeValidation } from "../../utils/functions";
import { HealerMass, HealerSingle, Melee } from "../../utils/typeClasses";
import { TARGET_CLASSES } from "../../utils/constants";
import { pickTarget } from "../../store/gameSlice";

interface SmallCardProps {
  player: Unit;
}

export default function SmallCard({ player }: SmallCardProps) {
  const playerType: string = Object.getPrototypeOf(player.constructor).name;
  const { source,  players, currentTarget } = useSelector(
    (state: RootState) => state.gameSlice
  );

  const dispatch = useDispatch();


    const targetValidation = useCallback(()=>{
      if (!source){return undefined;}
      if(source.id === player.id)
        return source.team
      if(currentTarget?.id === player.id)
        return 100
      if (source instanceof HealerSingle) {
        if (source.team === player.team) {return source.team;}
        return null;
      } 
      else if (source instanceof Melee) {
        return meleeValidation(source, player, players) ? player.team : null;
  
      } 
      else if (source instanceof HealerMass ){
        if(player.team === source.team){
          return player.team
        }

      } 
      else if (source.team !== player.team) {
        return player.team;
      }
      return null;
    },[source, currentTarget])



  function clickHandler() {
    if(TARGET_CLASSES.some((unitClass)=> source instanceof unitClass) ){
      if(targetValidation() && player.id !== source?.id)
        dispatch(pickTarget(player))

    }
  }

  return (
    <SmallCardWrapper>
      <CardWrapper
        onClick={clickHandler}
        dead={player.HP === 0}
        source={source?.team}
        target={targetValidation()}
        isSource={source?.id === player.id}
      >
        <DeadIndicator
          dead={player.HP === 0}
          paralyzed={player.paralyzed}
        ></DeadIndicator>
        <SmallCardImg alt={player.name} src={player.img} />
        <InfoWrapper>
          <p>Name: {player.name}</p>
          <p>Type: {playerType}</p>
          <p>HP: {player.HP}/{player.maxHP}</p>
        </InfoWrapper>
      </CardWrapper>
    </SmallCardWrapper>
  );
}
