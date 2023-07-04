import { HealerMass } from "../typeClasses";
import { UNITS } from "../constants";


export class Bishop extends HealerMass{
    constructor(id: number){
        super(UNITS[7], 25, id)
    }
}