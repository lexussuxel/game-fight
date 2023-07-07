import {  Action, IUnit, Unit } from "../interfaces";


export abstract class HealerMass extends Unit{
    
    heal: number

    constructor(object: IUnit, heal: number, id: number){
        super(object, id)
        this.heal = heal


    }  

    action:Action = () => {
        null
    }
}