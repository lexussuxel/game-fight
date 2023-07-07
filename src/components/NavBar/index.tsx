import React from "react"
import { ButtonStyled, ButtonsWrapper, NavWrapper, PlayersWrapper } from "./styles"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import FullCard from "../FullCard"

export default function NavBar({id}:{id:number}){
    const players = useSelector((state:RootState)=> id === 1?state.gameSlice.blueTeam: state.gameSlice.redTeam)
    return (
    <NavWrapper reverse={id !== 1}>
        <ButtonsWrapper>
              <ButtonStyled>Defend</ButtonStyled>
              <ButtonStyled>End round</ButtonStyled>
        </ButtonsWrapper>
      
        <PlayersWrapper>
        {players.map((player, i)=>
            <FullCard key={i} player={player}/>
        )}
        </PlayersWrapper>
       
    </NavWrapper>
)
}