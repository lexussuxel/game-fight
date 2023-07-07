import {   Action, IUnit, Unit } from "../interfaces";

export class Range extends Unit{

    damage: number

    constructor(object: IUnit, damage: number, id: number){
       super(object, id)

        this.damage = damage

    }  
    action: Action = ()=> {
        null
    }
}