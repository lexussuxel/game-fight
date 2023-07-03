import { Game } from "../gameInterface";
import { UnitTypes, UnitAction, UnitDamage } from "../interfaces";

export class Melee implements UnitAction{
    type: UnitTypes;
    HP: number
    initiative:number
    name:string
    img:string
    damage: number
    id: number

    constructor(object: UnitDamage, id: number){
        this.id = id
        this.type = object.type
        this.HP = object.HP
        this.initiative = object.initiative
        this.name = object.name
        this.img = object.img
        this.damage = object.damage


    }  
    action(player: UnitAction, game: Game):void{
        null
    }
}