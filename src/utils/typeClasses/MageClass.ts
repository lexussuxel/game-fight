import {  Action, IUnit, Unit } from "../interfaces";


export abstract class Mage extends Unit{
  
    damage: number

    constructor(object: IUnit, damage: number, id: number){
        super(object, id)

        this.damage = damage


    }  
    action:Action = ()=> {
       null 
    }
}