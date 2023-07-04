
import { Unit } from "../interfaces";


export class Paralyzer implements Unit{
    HP: number
    initiative:number
    name:string
    img:string
    id: number

    constructor(object: Omit<Unit, "action">, id: number){
        this.id = id
        this.HP = object.HP
        this.initiative = object.initiative
        this.name = object.name
        this.img = object.img
    } 

    action(): void {
        null
    }
}

