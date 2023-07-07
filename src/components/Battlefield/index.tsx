import React from "react"
import { BattlefiledWrapper, Divider, TeamWrapper } from "./styles"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import SmallCard from "../SmallCard"

export default function Battlefield(){
    const {blueTeam, redTeam} = useSelector((state: RootState)=> state.gameSlice)

    return (
    <BattlefiledWrapper>
        <TeamWrapper>
            {blueTeam.map((player)=> <SmallCard key={player.id} player={player}/>)}
        </TeamWrapper>
        <Divider/>
        <TeamWrapper>
            {redTeam.map((player)=> <SmallCard key={player.id} player={player}/>)}
        </TeamWrapper>
    </BattlefiledWrapper>
)
}