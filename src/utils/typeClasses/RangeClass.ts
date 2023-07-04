import {   Unit } from "../interfaces";

export class Range implements Unit{
    HP: number
    initiative:number
    name:string
    img:string
    damage: number
    id: number

    constructor(object: Omit<Unit, "action">, damage: number, id: number){
        this.id = id
        this.HP = object.HP
        this.initiative = object.initiative
        this.name = object.name
        this.img = object.img
        this.damage = damage

    }  
    action(): void {
        null
    }
}