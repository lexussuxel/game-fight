import React from "react"
import { Unit } from "../../utils/interfaces";
import { CardWrapper, DeadIndicator, InfoWrapper, SmallCardImg, SmallCardWrapper } from "./styles";

export default function SmallCard({player}:{player: Unit}){
    return(
        <SmallCardWrapper>
           
            <CardWrapper> 
                <DeadIndicator dead={player.HP === 0}></DeadIndicator>
                <SmallCardImg alt={player.name} src={player.img}/>
                <InfoWrapper>
                    <p>Name: {player.name}</p>
                    <p>HP: {player.HP}</p>
                </InfoWrapper>
            </CardWrapper>
        </SmallCardWrapper>
   )
}