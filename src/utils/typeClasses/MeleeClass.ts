import {  Unit, IUnit, Action } from "../interfaces";

export class Melee extends Unit{
    damage: number


    constructor(object: IUnit, damage: number, id: number){
        super(object, id)
        this.damage = damage


    }  
    action:Action = ()=> {
       null 
    }
}