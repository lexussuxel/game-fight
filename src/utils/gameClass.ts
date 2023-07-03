import { UNITS } from "./constants";
import UnitContext from "./context";
import { Attack } from "./interfaces";

export default class Game{
    players: Array<UnitContext>
    redUnitAction: Attack | null = null
    blueUnitAction: Attack | null = null
    public round: number
    helperText: string = ""


    constructor(){
        this.players = randomSetPlayers()
        this.round = 1
    }

    incrementRound(){
        this.round += 1
    }

}


function randomSetPlayers():Array<UnitContext>{
    let players = []
    for(let i = 0; i < 12; i++){
        const newUnit = UNITS[getRandomNumber(0, 12)]
        players.push(new UnitContext(newUnit,  i))
    }
    return players;
}


function getRandomNumber(min:number, max:number):number{
    return Math.floor(Math.random() * (max - min) + min)
}