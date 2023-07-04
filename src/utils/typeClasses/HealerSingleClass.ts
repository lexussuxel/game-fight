import { Unit } from "../interfaces";

export class HealerSingle implements Unit{
    HP: number
    initiative:number
    name:string
    img:string
    heal: number
    id: number

    constructor(object: Omit<Unit, "action">, heal: number, id: number){
        this.id = id
        this.HP = object.HP
        this.initiative = object.initiative
        this.name = object.name
        this.img = object.img
        this.heal = heal


    }  

    action(): void {
        null
    }
}