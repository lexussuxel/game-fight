import { Unit, IUnit, Action } from "../interfaces";


export class Paralyzer extends Unit{
    constructor(object: IUnit,  id: number){
        super(object, id)

    }  
    action:Action = ()=> {
       null 
    }
}

