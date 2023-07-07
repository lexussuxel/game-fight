import React from "react"
import { FullCardImg, FullCardWrapper, PStyled, PercentHP, TitleText } from "./styles"
import { Unit } from "../../utils/interfaces"
import { UI_KIT } from "../../UI"

export default function FullCard({player}:{player: Unit}){
    console.log(player.HP/ player.maxHP * 100 )
    const playerType: string = Object.getPrototypeOf(player.constructor).name
    return(
        <>
         <FullCardWrapper type={UI_KIT.boxShadow[playerType]}>
            <FullCardImg alt={player.name} src={player.img}/>
            <TitleText>{player.name}</TitleText>
            <PStyled>HP:{player.HP}</PStyled>
            <PStyled>Type: {playerType}</PStyled>
            <PercentHP percent={player.HP/ player.maxHP * 100} type={UI_KIT.colors[playerType]}></PercentHP>
        </FullCardWrapper>
        </>
       
    )
}