
import { Unit, UnitAction, UnitTypes } from "../interfaces";


export class Paralyzer implements UnitAction{
    type: UnitTypes;
    HP: number
    initiative:number
    name:string
    img:string
    id: number

    constructor(object: Unit, id:number){
        this.id = id
        this.type = object.type
        this.HP = object.HP
        this.initiative = object.initiative
        this.name = object.name
        this.img = object.img

    } 

    action(): void {
        null
    }
}

