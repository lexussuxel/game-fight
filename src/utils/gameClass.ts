import { Melee, Range, HealerMass, HealerSingle, Paralyzer, Mage } from "./actionClasses";
import { UNITS } from "./constants";
import {  Unit, UnitAction, UnitDamage, UnitHeal, UnitTypes } from "./interfaces";

export class Game{
    players: Array<UnitAction>
    redUnitAction:  | null = null
    blueUnitAction: | null = null
    public round: number
    helperText: string = ""


    constructor(){
        this.players = randomSetPlayers()
        this.round = 1
        console.log(this.players)
    }

    incrementRound(){
        this.round += 1
        console.log(this.round)

    }

}


function randomSetPlayers():Array<UnitAction>{
    let players = []
    for(let i = 0; i < 12; i++){
      
        players.push(getRandomUnit(i))
    }
    return players;
}


function getRandomUnit(id: number):UnitAction{
    const newUnitConst = UNITS[getRandomNumber(0, 9)]
    console.log(newUnitConst)
    let newUnit:UnitAction;
    switch(newUnitConst.type){
        case UnitTypes.Melee: {
            newUnit = new Melee(newUnitConst as UnitDamage, id)
            break;
        }
        case UnitTypes.Range:{
            newUnit = new Range(newUnitConst as UnitDamage, id)
            break; 
        }
        case UnitTypes.Mage:{
            newUnit = new Mage(newUnitConst as UnitDamage, id)
            break;
        }
        case UnitTypes.HealerMass:{
            newUnit = new HealerMass(newUnitConst as UnitHeal, id)
            break;
        }
        case UnitTypes.HealerSingle:{
            newUnit = new HealerSingle(newUnitConst as UnitHeal, id)
            break;
        }
        case UnitTypes.Paralyzer:{
            newUnit = new Paralyzer(newUnitConst as Unit, id)
            break;
        }
    }
    return newUnit
}

function getRandomNumber(min:number, max:number):number{
    return  Math.floor(Math.random() * (max - min) + min)
}


export default new Game() 