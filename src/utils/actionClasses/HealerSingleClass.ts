import { UnitTypes, UnitAction, UnitHeal } from "../interfaces";

export class HealerSingle implements UnitAction{
    type: UnitTypes;
    HP: number
    initiative:number
    name:string
    img:string
    heal: number
    id: number

    constructor(object: UnitHeal, id:number){
        this.id = id
        this.type = object.type
        this.HP = object.HP
        this.initiative = object.initiative
        this.name = object.name
        this.img = object.img
        this.heal = object.heal


    }  

    action(): void {
        null
    }
}