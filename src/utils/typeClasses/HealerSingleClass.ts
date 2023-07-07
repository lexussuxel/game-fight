import { IUnit, Unit, Action } from "../interfaces";

export class HealerSingle extends Unit{
    heal: number

    constructor(object: IUnit, heal: number, id: number){
        super(object, id)
        this.heal = heal


    }  

    action:Action = () => {
        null
    }
}